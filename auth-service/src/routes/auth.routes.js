const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth.controller");

router.post("/register/patient", (req, res) => controller.register({ ...req, body: { ...req.body, role: "patient" } }, res));
router.post("/register/staff", (req, res) => controller.register({ ...req, body: { ...req.body, role: "staff" } }, res));
router.post("/login", controller.login);

module.exports = router;
