const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["patient", "staff"], required: true },
    name: String,
    resetToken: String,
resetTokenExpires: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
