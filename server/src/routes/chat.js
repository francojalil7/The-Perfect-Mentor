const express = require("express");
const { newChat, deleteChat, getChats } = require("../controllers/chat");
const { validateUser } = require("../middleware/auth");
const router = express.Router();

router.get("/", validateUser, getChats);
router.post("/new", validateUser, newChat);
router.delete("/", validateUser, deleteChat);
module.exports = router;
