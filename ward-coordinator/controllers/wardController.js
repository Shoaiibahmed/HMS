const Ward = require('../models/Ward');

exports.addWard = async (req, res) => {
  try {
    const ward = new Ward(req.body);
    await ward.save();
    res.status(201).json(ward);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWards = async (req, res) => {
  try {
    const wards = await Ward.find();
    res.json(wards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.assignBed = async (req, res) => {
  try {
    const ward = await Ward.findOne({ 'beds._id': req.params.bedId });
    const bed = ward.beds.id(req.params.bedId);
    if (!bed || bed.isOccupied) {
      return res.status(400).json({ error: 'Bed not available' });
    }
    bed.isOccupied = true;
    bed.patientId = req.body.patientId;
    await ward.save();
    res.json({ message: 'Bed assigned successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.vacateBed = async (req, res) => {
  try {
    const ward = await Ward.findOne({ 'beds._id': req.params.bedId });
    const bed = ward.beds.id(req.params.bedId);
    if (!bed || !bed.isOccupied) {
      return res.status(400).json({ error: 'Bed is already vacant' });
    }
    bed.isOccupied = false;
    bed.patientId = null;
    await ward.save();
    res.json({ message: 'Bed vacated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
