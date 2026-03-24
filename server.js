const fs = require("fs");
const path = require("path");

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

require("dotenv").config();

const rateLimit = require("express-rate-limit");
const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const app = express();

app.set("trust proxy", 1);

app.use(express.json());
app.use(express.static(__dirname));

/* ================================
   EMAIL TRANSPORTER
================================ */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const bookingLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 3,
  message: "Too many booking attempts. Please try later."
});

/* ================================
   STORAGE
================================ */

const bookings = loadBookings();
const emailCooldown = new Map();

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

const restaurantInfo = {
  "1": {
    name: "Rim Thanonh 1",
    address: "Budapest, Dob u. 60, 1074"
  },
  "2": {
    name: "Rim Thanonh 2",
    address: "Budapest, Akácfa u. 40, 1072"
  },
  "3": {
    name: "Rim Thanonh 4",
    address: "Budapest, Klauzál u. 35, 1072"
  }
};

/* ================================
   TIME VALIDATION
================================ */

function normalizeBookingTime(timeStr) {
  const OPEN_MINUTES = 11 * 60;
  const CLOSE_MINUTES = 20 * 60;

  if (!timeStr || !timeStr.includes(":")) return "11:00";

  const [hours, minutes] = timeStr.split(":").map(Number);
  let totalMinutes = hours * 60 + minutes;

  if (totalMinutes < OPEN_MINUTES) totalMinutes = OPEN_MINUTES;
  if (totalMinutes > CLOSE_MINUTES) totalMinutes = CLOSE_MINUTES;

  const h = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const m = String(totalMinutes % 60).padStart(2, "0");

  return `${h}:${m}`;
}

/* ================================
   BOOKING
================================ */

app.post("/book", bookingLimiter, async (req, res) => {

  // honeypot
  if (req.body.website) {
    console.log("Bot blocked");
    return res.sendStatus(400);
  }

  const { name, phone, email, guests, restaurant, date, time, message, privacy } = req.body;

  // required fields
  if (!name || !email || !phone || !guests || !date || !time) {
    return res.status(400).send("Missing required fields.");
  }

  // guests validation
  const guestsNumber = Number(guests);
  if (!Number.isInteger(guestsNumber) || guestsNumber < 1 || guestsNumber > 16) {
    return res.status(400).send("Invalid guest count.");
  }

  // privacy
  if (!privacy) {
    return res.status(400).send("You must accept the privacy policy.");
  }

  const safeTime = normalizeBookingTime(time);
  const targetEmail = emails[restaurant];

  if (!targetEmail) {
    return res.status(400).send("Invalid restaurant.");
  }

  const bookingId = crypto.randomBytes(32).toString("hex");

  bookings.set(bookingId, {
    name,
    email,
    guests: guestsNumber,
    restaurant,
    date,
    time: safeTime,
    message,
    status: "pending"
  });

  // cooldown
  const now = Date.now();
  const cooldownKey = `${email}_${restaurant}`;
  const lastBooking = emailCooldown.get(cooldownKey);

  if (lastBooking && now - lastBooking < 15 * 60 * 1000) {
    bookings.delete(bookingId);
    return res.status(429).send("Please wait before making another booking.");
  }

  emailCooldown.set(cooldownKey, now);

  try {
    await transporter.sendMail({
      to: targetEmail,
      subject: "New Table Booking",
      html: `
        <h2>New Reservation Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Guests:</strong> ${guestsNumber}</p>
        <p><strong>Restaurant:</strong> ${restaurantNames[restaurant]}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${safeTime}</p>
        <p><strong>Privacy:</strong> ${privacy ? "Yes" : "No"}</p>
        <p><strong>Message:</strong><br>${message || "None"}</p>

        <hr>

        <table cellspacing="0" cellpadding="0">
  <tr>
    <td align="center" bgcolor="#28a745" style="border-radius:6px;">
      <a href="${process.env.BASE_URL}/accept?id=${bookingId}"
         style="
           display:inline-block;
           padding:12px 20px;
           font-size:16px;
           color:#ffffff;
           text-decoration:none;
           font-weight:bold;
         ">
         ✅ Accept Booking
      </a>
    </td>
  </tr>
</table>

<br>

<table cellspacing="0" cellpadding="0">
  <tr>
    <td align="center" bgcolor="#dc3545" style="border-radius:6px;">
      <a href="${process.env.BASE_URL}/reject?id=${bookingId}"
         style="
           display:inline-block;
           padding:12px 20px;
           font-size:16px;
           color:#ffffff;
           text-decoration:none;
           font-weight:bold;
         ">
         ❌ Reject Booking
      </a>
    </td>
  </tr>
</table>
      `
    });

    saveBookings(); // ✅ SAVE ONLY AFTER SUCCESS

    res.sendStatus(200);

  } catch (err) {
    console.error(err);

    bookings.delete(bookingId); // ✅ prevent ghost booking

    res.status(500).send("Email failed");
  }

});

/* ================================
   ACCEPT
================================ */

app.get("/accept", async (req, res) => {
  const booking = bookings.get(req.query.id);

  if (!booking) return res.status(404).send("Invalid booking.");
  if (booking.status !== "pending") return res.send("Already processed.");

  booking.status = "accepted";
  saveBookings();

  const restaurant = restaurantInfo[booking.restaurant];

  try {
    await transporter.sendMail({
      to: booking.email,
      subject: "Reservation Confirmed",
      text: `Reservation confirmed at ${restaurant.name} on ${booking.date} at ${booking.time}`
    });

    res.send("✅ Accepted");

  } catch {
    res.status(500).send("Email failed.");
  }
});

/* ================================
   REJECT
================================ */

app.get("/reject", async (req, res) => {
  const booking = bookings.get(req.query.id);

  if (!booking) return res.status(404).send("Invalid booking.");
  if (booking.status !== "pending") return res.send("Already processed.");

  booking.status = "rejected";
  saveBookings();

  try {
    await transporter.sendMail({
      to: booking.email,
      subject: "Reservation Update",
      text: "Unfortunately your booking was rejected."
    });

    res.send("❌ Rejected");

  } catch {
    res.status(500).send("Email failed.");
  }
});

/* ================================
   SERVER
================================ */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});