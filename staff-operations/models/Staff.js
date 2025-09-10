const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // From access-management JWT
  name: String,
  department: String,
  role: String,
  contact: String,
  schedule: [
    {
      date: Date,
      shift: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema);
