const bcrypt = require("bcryptjs");
const User = require("../model/User");
const Otp = require("../model/Otp");
const sendOTP = require("../utils/sendEmail");

exports.registerUser = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) return res.status(400).json({ message: "Email is required" });

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered." });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await Otp.findOneAndUpdate(
      { email },
      { otp, createdAt: Date.now() },
      { upsert: true, new: true }
    );

    await sendOTP(email, otp);

    res.status(200).json({ message: "OTP sent to your email.", email });
  } catch (err) {
    console.error("❌ OTP error:", err);
    res.status(500).json({ message: "Server error: " + err.message });
  }
};

exports.verifyOtp = async (req, res) => {
  const { email, otp, ...userData } = req.body;

  try {
    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    const record = await Otp.findOne({ email });
    if (!record || record.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists." });

    if (!userData.password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = new User({
      email,
      ...userData,
      password: hashedPassword,
      isVerified: true,
    });

    await user.save();
    await Otp.deleteOne({ email });

    res.status(200).json({ message: "Email verified and account created." });
  } catch (err) {
    console.error("❌ Verify OTP error:", err);
    res.status(500).json({ message: "Server error: " + err.message });
  }
};
