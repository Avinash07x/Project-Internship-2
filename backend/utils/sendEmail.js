const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Gmail
    pass: process.env.EMAIL_PASS, // App Password (not Gmail login password)
  },
});

const sendOTP = async (to, otp) => {
  try {
    await transporter.sendMail({
      from: `"EsteemHost" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Your OTP Code",
      html: `<h2>Your OTP is: ${otp}</h2><p>It is valid for 5 minutes.</p>`,
    });
    console.log("✅ OTP sent to:", to);
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    throw new Error("Email sending failed");
  }
};

module.exports = sendOTP;


