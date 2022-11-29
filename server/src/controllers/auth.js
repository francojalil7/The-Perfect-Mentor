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
  return res.status(200).send({user, token});
};

const completeRegisterCtrl = async ({ body }, res) => {
  const filter= { email: body.email};
  let update = {
    role: body.role,
    country: body.country,
    age: body.age,
    language: body.language,
    description:body.description
   }

  let updatedUser =  await User.findOneAndUpdate(filter,update,{
    returnOriginal: false
  });

res.status(201).send(updatedUser);
}

module.exports = { registerCtrl, loginCtrl, completeRegisterCtrl };

