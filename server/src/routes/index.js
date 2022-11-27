const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const user = require("./user")

router.get("/", (req, res) => res.send("Index"));
//router.use("/user", userRouter);
router.use("/auth", authRouter);

router.use("/user", user)

module.exports = router;
