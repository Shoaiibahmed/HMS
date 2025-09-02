const Patient = require("../models/patient.model");

// Get current patient's profile
exports.getProfile = async (req, res) => {
  try {
    const patient = await Patient.findOne({ userId: req.user.id });
    if (!patient) return res.status(404).json({ message: "Profile not found" });

    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create or update patient profile
exports.upsertProfile = async (req, res) => {
  try {
    const updated = await Patient.findOneAndUpdate(
      { userId: req.user.id },
      { ...req.body, userId: req.user.id },
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
