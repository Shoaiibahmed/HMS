const Patient = require("../models/patient.model");

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePatient = async (req, res) => {
  const userId = req.params.id;
  try {
    const updated = await Patient.findOneAndUpdate(
      { userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePatient = async (req, res) => {
  const userId = req.params.id;
  try {
    await Patient.findOneAndDelete({ userId });
    res.json({ message: "Patient deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
