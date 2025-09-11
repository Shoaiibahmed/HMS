const Appointment = require('../models/Appointment');

exports.bookAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create({ ...req.body, userId: req.user.id });
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user.id });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const updated = await Appointment.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { $set: req.body },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Appointment not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    const cancelled = await Appointment.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { $set: { status: 'cancelled' } },
      { new: true }
    );
    if (!cancelled) return res.status(404).json({ error: "Appointment not found" });
    res.json(cancelled);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
