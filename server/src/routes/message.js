const express = require("express");
const {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
} = require("../controllers/message");
const { validateUser } = require("../middleware/auth");
const router = express.Router();

router.post("/", validateUser, addMessage);
router.get("/get", validateUser, getMessages);
router.put("/:idMessage", validateUser, updateMessage);
router.delete("/:idMessage", validateUser, deleteMessage);

module.exports = router;
