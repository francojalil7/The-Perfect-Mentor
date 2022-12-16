const express = require("express");
const { registerCtrl, loginCtrl, completeRegisterCtrl } = require("../controllers/auth");
const { validateUser } = require("../middleware/auth");
const { validateSignUp } = require("../utils/validators");
const router = express.Router();

router.post("/register", validateSignUp, registerCtrl);

router.post("/login", loginCtrl);

router.post("/completeRegister", completeRegisterCtrl)

router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});
module.exports = router;
