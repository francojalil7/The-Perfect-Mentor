const User = require("../models/User");

//FIND ALL USERS
//FIND ONE USER
//MENTOR, MENTEE, ADMIN -> ID /email
//ASIGNAR UN MENTEE O MENTOR

const me = async (req, res) => {
  let user = await User.findOne({ email: req.params.email });
  res.send(user);
};

const updateUser = async (req, res) => {
  let userUpdate = await User.findOneAndUpdate({ _id: req.body._id }, req.body);
  userUpdate.save();
  const user = await User.find({ _id: req.body._id });
  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  const userDelete = await User.findOneAndDelete(req.body._id);
  res.sendStatus(204);
};

const findAllUsers = async (req, res) => {
  let userList = [];
  userList = await User.find();
  res.status(200).send(userList);
};

module.exports = { me, updateUser, deleteUser, findAllUsers };
