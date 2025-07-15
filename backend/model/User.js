const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true, unique: true },
  username: String,
  password: { type: String, required: true },
  companyName: String,
  phoneNumber: String,
  city: String,
  address: String,
  gstCode: String,
  agreeToTerms: Boolean,
  isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
