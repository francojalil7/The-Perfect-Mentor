const {validateToken} = require("../utils/tokens");

const validateUser = (req, res, next) => {
  const {token} = req.body;
  const  payload  = validateToken(token);
  req.user = payload;
  if (payload) return next();
  res.sendStatus(401);
};

module.exports = { validateUser };