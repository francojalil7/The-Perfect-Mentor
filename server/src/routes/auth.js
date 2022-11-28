const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const { validateUser } = require("../middleware/auth");
const { validateSignUp } = require("../utils/validators");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/register", validateSignUp, registerCtrl);

router.post("/login", loginCtrl);

router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});
module.exports = router;
