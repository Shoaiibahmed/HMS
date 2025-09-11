const express = require('express');
const router = express.Router();
const emergencyController = require('../controllers/emergencyController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/report', verifyToken, emergencyController.reportEmergency);
router.get('/active', verifyToken, emergencyController.getActiveEmergencies);
router.put('/update/:id', verifyToken, emergencyController.updateEmergencyStatus);

module.exports = router;
