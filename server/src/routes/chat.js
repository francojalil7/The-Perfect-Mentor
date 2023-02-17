const express = require("express");
const {
  newChat,
  deleteChat,
  getChats,
  selectedChat,
} = require("../controllers/chat");
const { validateUser } = require("../middleware/auth");
const router = express.Router();

router.get("/", getChats);
router.get("/selectedChat", selectedChat);
router.post("/new", validateUser, newChat);
router.delete("/", validateUser, deleteChat);

module.exports = router;
