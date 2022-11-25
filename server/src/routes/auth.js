const express = require("express");
const { registerCtrl } = require("../controllers/auth");
const { validateSignUp } = require("../utils/validators");
const router = express.Router();

router.post("/register", validateSignUp, registerCtrl);

module.exports = router;
