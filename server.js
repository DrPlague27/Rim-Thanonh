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
   EMAIL SETUP
================================ */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/* ================================
   RATE LIMIT (SAFE)
================================ */

const bookingLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10,
  message: "Too many requests. Please try again later."
});

/* ================================
   RESTAURANTS
================================ */

const emails = {
  "1": "rimthanonh1@gmail.com",
  "2": "rimthanonh1@gmail.com",
  "3": "rimthanonh1@gmail.com"
};

const restaurantNames = {
  "1": "Rim Thanonh 1",
  "2": "Rim Thanonh 2",
  "3": "Rim Thanonh 4"
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

  if (req.body.website) return res.sendStatus(400); // bot trap

  const { name, phone, email, guests, restaurant, date, time, message } = req.body;

  if (!name || !phone || !email || !guests || !date || !time) {
    return res.status(400).send("Missing fields");
  }

  const guestsNum = Number(guests);
  if (guestsNum < 1 || guestsNum > 16) {
    return res.status(400).send("Invalid guests");
  }

  const safeTime = normalizeTime(time);
  const targetEmail = emails[restaurant];

  if (!targetEmail) {
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
      to: targetEmail,
      subject: "New Reservation",
      html: `
        <h2>New Booking</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Guests:</b> ${guestsNum}</p>
        <p><b>Restaurant:</b> ${restaurantNames[restaurant]}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${safeTime}</p>
        <p><b>Message:</b> ${message || "None"}</p>

        <br>

        <a href="https://rim-thanonh.onrender.com/accept?id=${bookingId}"
        style="background:#28a745;color:white;padding:12px 20px;text-decoration:none;border-radius:6px;">
        ✅ Accept Booking
        </a>

        <br><br>

        <a href="https://rim-thanonh.onrender.com/reject?id=${bookingId}"
        style="background:#dc3545;color:white;padding:12px 20px;text-decoration:none;border-radius:6px;">
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

  try {
    await transporter.sendMail({
      to: booking.email,
      subject: "Reservation Confirmed",
      text: `Your booking is confirmed for ${booking.date} at ${booking.time}`
    });

    res.send("✅ Booking Accepted");

  } catch {
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
      text: "Unfortunately your booking was rejected."
    });

    res.send("❌ Booking Rejected");

  } catch {
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