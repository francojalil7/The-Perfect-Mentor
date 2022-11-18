const express = require("express");
const router = express.Router();

router.get("/", (req,res)=> res.send("Index"))
//router.use("/user", userRouter);

module.exports = router;