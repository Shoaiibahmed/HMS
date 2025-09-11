const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/book', verifyToken, appointmentController.bookAppointment);
router.get('/my', verifyToken, appointmentController.getMyAppointments);
router.put('/:id', verifyToken, appointmentController.updateAppointment);
router.delete('/:id', verifyToken, appointmentController.cancelAppointment);

module.exports = router;
