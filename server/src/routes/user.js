const express = require("express");
const { validateUser } = require("../middleware/auth");
const router = express.Router();
const {
  me,
  updateUser,
  deleteUser,
  findAllUsers,
  totalUsers,
  singPerMounth,
  newUsers,
  filteredUser,
} = require("../controllers/user");

router.get("/me", me);
router.put("/update", updateUser);
router.delete("/delete", deleteUser);
router.get("/users", findAllUsers);
router.get("/totalUsers", validateUser, totalUsers);
router.get("/singPerMounth", validateUser, singPerMounth);
router.get("/newUsers", validateUser, newUsers);
router.get("/filtered", validateUser, filteredUser);
module.exports = router;
