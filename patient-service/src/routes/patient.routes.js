const express = require("express");
const router = express.Router();
const controller = require("../controllers/patient.controller");
const authenticate = require("../middlewares/auth.middleware");

router.get("/me", authenticate, controller.getProfile);
router.put("/me", authenticate, controller.upsertProfile);

module.exports = router;
