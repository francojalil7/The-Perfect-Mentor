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

router.put("/upgrade/:email", /*validateUser, checkAdmin,*/ upgradeUser);
router.put("/downgrade/:id", validateUser, checkAdmin, downgradeUser);
router.delete("/:email", /*validateUser, checkAdmin,*/ deleteUser);
router.get("/search/:data", validateUser, checkAdmin, searchCtrl);

module.exports = router;
