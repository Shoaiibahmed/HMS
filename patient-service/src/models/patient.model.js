const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true }, // Link to auth-service user
    age: Number,
    gender: String,
    address: String,
    contactNumber: String,
    bloodType: String,
    emergencyContact: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
