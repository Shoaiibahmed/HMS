const Emergency = require('../models/Emergency');

// POST /api/emergency/report
exports.reportEmergency = async (req, res) => {
  try {
    const emergency = new Emergency({
      reportedBy: req.user.id,
      type: req.body.type,
      description: req.body.description,
      status: 'open'
    });
    await emergency.save();
    res.status(201).json(emergency);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/emergency/active
exports.getActiveEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find({ status: 'open' });
    res.json(emergencies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/emergency/update/:id
exports.updateEmergencyStatus = async (req, res) => {
  try {
    const emergency = await Emergency.findById(req.params.id);
    if (!emergency) return res.status(404).json({ error: 'Emergency not found' });

    emergency.status = req.body.status || emergency.status;
    await emergency.save();
    res.json(emergency);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
