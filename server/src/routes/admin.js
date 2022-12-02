const express = require("express");
const router = express.Router();
const { validateUser } = require("../middleware/auth");
const { checkAdmin } = require("../middleware/role");
const {
  upgradeUser,
  downgradeUser,
  deleteUser,
  searchCtrl,
} = require("../controllers/admin");

router.put("/upgrade/:id", validateUser, checkAdmin, upgradeUser);
router.put("/downgrade/:id", validateUser, checkAdmin, downgradeUser);
router.delete("/:id", validateUser, checkAdmin, deleteUser);
router.get("/search/:data", validateUser, checkAdmin, searchCtrl);

module.exports = router;
