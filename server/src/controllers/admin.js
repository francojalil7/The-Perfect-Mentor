const User = require("../models/User");

const upgradeUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: req.params.email },
      { isAdmin: true },
      { new: true }
    );
    res.send({ me: user });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

const downgradeUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { isAdmin: false },
      { new: true }
    );
    res.send({ me: user });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};
const deleteUser = async (req, res) => {
  User.findOneAndRemove({ email: req.params.email }).exec(function (err, item) {
    if (err) {
      return res.send({ success: false, msg: "Cannot remove item" });
    }
    if (!item) {
      return res.status(404).send({ success: false, msg: "User not found" });
    }
    
    res.status(204).send({ username: item.userName, email: item.email });
  });
};
const searchCtrl = async (req, res) => {
  const users = await User.find({ userName: req.params.search });
  res.send(users);
};
module.exports = { upgradeUser, downgradeUser, deleteUser, searchCtrl };
