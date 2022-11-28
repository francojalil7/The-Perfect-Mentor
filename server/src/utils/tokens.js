const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    userName: user.userName,
    id: user._id,
  };
  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "2d" });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};

module.exports = { generateToken, validateToken };
