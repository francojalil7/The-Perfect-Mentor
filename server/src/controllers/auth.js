const User = require("../models/User");
const { encrypt } = require("../utils/handlerPassword");

const registerCtrl = async ({ body }, res) => {
  const passwordHash = await encrypt(body.password);
  const user = new User({ ...body, password: passwordHash });
  const savedUser = await user.save();
  res.status(201).send(savedUser);
};

module.exports = { registerCtrl };
