const checkMentee = (req, res, next) => {
  if (req.user.isMentee) {
    next();
  } else {
    res.send(401);
  }
};

const checkMentor = (req, res, next) => {
  if (req.user.isMentor) {
    next();
  } else {
    res.send(401);
  }
};

const checkAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ error: "user is not admin" });
  }
};

module.exports = { checkMentee, checkMentor, checkAdmin };
