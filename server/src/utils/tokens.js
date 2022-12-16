const jwt = require("jsonwebtoken");

const getTokenSignUp = (payload) => {
  return jwt.sign({
      data: payload
  }, 'SECRET', { expiresIn: '1h' });
}

const getTokenData = (token) => {
  let data = null;
  jwt.verify(token, 'SECRET', (err, decoded) => {
      if(err) {
          console.log('Error al obtener data del token');
      } else {
          data = decoded;
      }
  });

  return data;
}

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


module.exports = { generateToken, validateToken, getTokenSignUp, getTokenData };


