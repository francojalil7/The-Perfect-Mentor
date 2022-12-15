const express = require("express");
const router = express.Router();
const { me, updateUser, deleteUser, findAllUsers } = require("../controllers/user");

router.get("/me/:email", me)
router.put("/update", updateUser)
router.delete("/delete", deleteUser)
router.get("/users", findAllUsers)

module.exports = router;