const express = require("express");
const { registerCtrl, loginCtrl, completeRegisterCtrl, validateUserCtrl, forgotPasswordCtrl, createNewPasswordCtrl } = require("../controllers/auth");
const { validateUser } = require("../middleware/auth");
const { validateSignUp } = require("../utils/validators");
const router = express.Router();

router.post("/register", validateSignUp, registerCtrl);
router.get("/validateUser/:token", validateUserCtrl)
router.post("/login", loginCtrl);
router.post("/completeRegister", completeRegisterCtrl)

router.put("/forgot-password", forgotPasswordCtrl)
router.put("/new-password/:newPassword/:token", createNewPasswordCtrl)

router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

module.exports = router;
