const express = require('express');
const router = express.Router();
const wardController = require('../controllers/wardController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/add', verifyToken, wardController.addWard);
router.get('/', verifyToken, wardController.getWards);
router.put('/assign/:bedId', verifyToken, wardController.assignBed);
router.put('/vacate/:bedId', verifyToken, wardController.vacateBed);

module.exports = router;
