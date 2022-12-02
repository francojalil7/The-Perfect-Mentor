const { validateToken } = require("../utils/tokens");

const validateUser = (req, res, next) => {
  const { token } = req.body;
  if (!token) return res.status(401).send({ error: "token is empty" });
  const payload = validateToken(token);
  req.user = payload;
  if (payload) return next();
  res.sendStatus(401);
};

module.exports = { validateUser };
