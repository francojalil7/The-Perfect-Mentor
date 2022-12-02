const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const user = require("./user");
const adminRouter = require("./admin");

router.get("/", (req, res) => res.send("Index"));
router.use("/auth", authRouter);
router.use("/user", user);
router.use("/admin", adminRouter);

module.exports = router;
