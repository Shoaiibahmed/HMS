const express = require("express");
const router = express.Router();
const controller = require("../controllers/patient.controller");
const authenticate = require("../middlewares/auth.middleware");

// All routes are protected
router.get("/", authenticate, controller.getPatients);
router.put("/:id", authenticate, controller.updatePatient);
router.delete("/:id", authenticate, controller.deletePatient);

module.exports = router;
