const mongoose = require('mongoose');

const bedSchema = new mongoose.Schema({
  bedNumber: String,
  isOccupied: { type: Boolean, default: false },
  patientId: { type: String, default: null }
});

const wardSchema = new mongoose.Schema({
  name: String,
  department: String,
  beds: [bedSchema]
});

module.exports = mongoose.model('Ward', wardSchema);
