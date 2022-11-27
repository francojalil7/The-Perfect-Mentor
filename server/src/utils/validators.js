const { check, validationResult } = require("express-validator");

const validateSignUp = [
  check("userName").exists().not().isEmpty(),
  check("password").exists().not().isEmpty().isLength({ min: 5 }),
  check("email").exists().isEmail(),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      next()
    } catch (error) {
      res.status(403);
      res.send({ error: error.array() });
    }
  },
];

module.exports = { validateSignUp };
