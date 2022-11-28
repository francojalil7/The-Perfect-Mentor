const User = require("../models/User");

const bcrypt = require("bcrypt");
const { encrypt } = require("../utils/handlerPassword");

const { generateToken } = require("../utils/tokens");

const registerCtrl = async ({ body }, res) => {
  const passwordHash = await encrypt(body.password);
  const user = new User({ ...body, password: passwordHash });
  const savedUser = await user.save();
  res.status(201).send(savedUser);
};

const loginCtrl = async ({ body }, res) => {
  const user = await User.findOne({ email: body.email });

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(body.password, user.password);

  if (!(user && passwordCorrect)) {
    return res.status(401).send({
      error: "invalid username or password",
    });
  }

  const token = generateToken(user);
  res.status(200).send({ token });
};

module.exports = { registerCtrl, loginCtrl };
