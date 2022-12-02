const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    userName: user.userName,
    email: user.email,
    isAdmin: user.isAdmin,
    isMentee: user.isMentee,
    isMentor: user.isMentor,
    id: user._id,
  };
  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "2d" });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};

module.exports = { generateToken, validateToken };
