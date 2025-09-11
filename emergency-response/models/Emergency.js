const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
  reportedBy: { type: String, required: true },
  type: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Emergency', emergencySchema);
