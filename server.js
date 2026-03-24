require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const rateLimit = require("express-rate-limit");

const app = express();
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.static(__dirname));

/* ================================
   FILE STORAGE
================================ */

const BOOKINGS_FILE = path.join(__dirname, "bookings.json");

function loadBookings() {
  try {
    const data = fs.readFileSync(BOOKINGS_FILE);
    return new Map(Object.entries(JSON.parse(data)));
  } catch {
    return new Map();
  }
}

function saveBookings() {
  fs.writeFileSync(
    BOOKINGS_FILE,
    JSON.stringify(Object.fromEntries(bookings), null, 2)
  );
}

const bookings = loadBookings();

/* ================================
   EMAIL
================================ */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/* ================================
   RATE LIMIT
================================ */

const bookingLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10
});

/* ================================
   RESTAURANTS
================================ */

const restaurantInfo = {
  "1": {
    name: "Rim Thanonh 1",
    address: "Budapest, Dob u. 60, 1074",
    email: "rimthanonh1@gmail.com"
  },
  "2": {
    name: "Rim Thanonh 2",
    address: "Budapest, Akácfa u. 40, 1072",
    email: "rimthanonh1@gmail.com"
  },
  "3": {
    name: "Rim Thanonh Thai Tea & Snacks",
    address: "Budapest, Klauzál u. 35, 1072",
    email: "rimthanonh1@gmail.com"
  }
};

/* ================================
   TIME FIX
================================ */

function normalizeTime(timeStr) {
  if (!timeStr || !timeStr.includes(":")) return "11:00";

  let [h, m] = timeStr.split(":").map(Number);

  if (h < 11) h = 11;
  if (h > 20) h = 20;

  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/* ================================
   BOOKING
================================ */

app.post("/book", bookingLimiter, async (req, res) => {

  if (req.body.website) return res.sendStatus(400);

  const { name, phone, email, guests, restaurant, date, time, message } = req.body;

  if (!name || !phone || !email || !guests || !date || !time) {
    return res.status(400).send("Missing fields");
  }

  const guestsNum = Number(guests);
  if (guestsNum < 1 || guestsNum > 16) {
    return res.status(400).send("Invalid guests");
  }

  const safeTime = normalizeTime(time);
  const restaurantData = restaurantInfo[restaurant];

  if (!restaurantData) {
    return res.status(400).send("Invalid restaurant");
  }

  const bookingId = crypto.randomBytes(16).toString("hex");

  bookings.set(bookingId, {
    name,
    phone,
    email,
    guests: guestsNum,
    restaurant,
    date,
    time: safeTime,
    message,
    status: "pending"
  });

  try {

    await transporter.sendMail({
      to: restaurantData.email,
      subject: "New Reservation",
      html: `
        <h2>New Booking</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Guests:</b> ${guestsNum}</p>
        <p><b>Restaurant:</b> ${restaurantData.name}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${safeTime}</p>
        <p><b>Message:</b> ${message || "None"}</p>

        <br>

        <a href="https://rimthanonh.hu/accept?id=${bookingId}"
        style="display:inline-block;background:#28a745;color:white;padding:12px 20px;text-decoration:none;border-radius:6px;font-weight:bold;">
        ✅ Accept Booking
        </a>

        <div style="height:10px;"></div>

        <a href="https://rimthanonh.hu/reject?id=${bookingId}"
        style="display:inline-block;background:#dc3545;color:white;padding:12px 20px;text-decoration:none;border-radius:6px;font-weight:bold;">
        ❌ Reject Booking
        </a>
      `
    });

    saveBookings();
    res.sendStatus(200);

  } catch (err) {
    console.error(err);
    bookings.delete(bookingId);
    res.status(500).send("Email failed");
  }

});

/* ================================
   ACCEPT
================================ */

app.get("/accept", async (req, res) => {

  const booking = bookings.get(req.query.id);
  if (!booking) return res.send("Invalid booking");

  if (booking.status !== "pending") {
    return res.send("Already processed");
  }

  booking.status = "accepted";
  saveBookings();

  const restaurant = restaurantInfo[booking.restaurant];

  try {
    await transporter.sendMail({
      to: booking.email,
      subject: "Reservation Confirmed",
      html: `
        <p>Dear ${booking.name},</p>

        <p>We are delighted to confirm your reservation.</p>

        <h3>Reservation Details:</h3>
        <p><strong>Restaurant:</strong> ${restaurant.name}</p>
        <p><strong>Address:</strong> ${restaurant.address}</p>
        <p><strong>Date:</strong> ${booking.date}</p>
        <p><strong>Time:</strong> ${booking.time}</p>
        <p><strong>Guests:</strong> ${booking.guests}</p>

        <br>

        <p>We look forward to welcoming you.</p>

        <br>

        <p>Best regards,<br>Rim Thanonh Thai Food</p>
      `
    });

    res.send("✅ Booking Accepted");

  } catch (err) {
    console.error(err);
    res.status(500).send("Email failed");
  }

});

/* ================================
   REJECT
================================ */

app.get("/reject", async (req, res) => {

  const booking = bookings.get(req.query.id);
  if (!booking) return res.send("Invalid booking");

  if (booking.status !== "pending") {
    return res.send("Already processed");
  }

  booking.status = "rejected";
  saveBookings();

  try {
    await transporter.sendMail({
      to: booking.email,
      subject: "Reservation Update",
      html: `
        <p>Dear ${booking.name},</p>

        <p>Thank you for your reservation request.</p>

        <p>Unfortunately, we are unable to confirm your booking at this time.</p>

        <p>Please try another date or time.</p>

        <br>

        <p>We apologize for the inconvenience.</p>

        <br>

        <p>Best regards,<br>Rim Thanonh Thai Food</p>
      `
    });

    res.send("❌ Booking Rejected");

  } catch (err) {
    console.error(err);
    res.status(500).send("Email failed");
  }

});

/* ================================
   SERVER
================================ */

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("SERVER RUNNING 🚀");
});