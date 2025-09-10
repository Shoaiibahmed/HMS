const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/profile', verifyToken, staffController.getProfile);
router.put('/profile', verifyToken, staffController.updateProfile);

module.exports = router;
