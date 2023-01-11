const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const user = require("./user");
const adminRouter = require("./admin");
const chatRouter = require("./chat");
const messageRouter = require("./message");

router.use("/auth", authRouter);
router.use("/user", user);
router.use("/admin", adminRouter);
router.use("/chat", chatRouter);
router.use("/message", messageRouter);

module.exports = router;
