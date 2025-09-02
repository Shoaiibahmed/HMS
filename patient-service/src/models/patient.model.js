const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true }, // from auth-service
    name: String,
    age: Number,
    gender: String,
    address: String,
    phone: String,
    medicalHistory: [
      {
        diagnosis: String,
        treatment: String,
        prescription: String,
        visitDate: Date
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
