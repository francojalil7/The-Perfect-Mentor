const User = require("../models/User");
const bcrypt = require("bcrypt");
const { encrypt } = require("../utils/handlerPassword");
const {
  generateToken,
  getTokenSignUp,
  getTokenData,
} = require("../utils/tokens");
const { transporter, getTemplate } = require("../utils/mail");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { body } = require("express-validator");

const registerCtrl = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    // Verificar que el usuario no exista
    let user = (await User.findOne({ email })) || null;
    if (user !== null) {
      return res.json({
        success: false,
        msg: "User allready exist",
      });
    }
    // Generar el código
    const code = uuidv4();
    const passwordHash = await encrypt(password);

    // Crear un nuevo usuario
    user = new User({ userName, email, password: passwordHash, code });

    // Generar token
    const token = getTokenSignUp({ email, code });
    const template = getTemplate(userName, token);

    try {
      console.log("SEND EMAIL");
      await transporter.sendMail({
        from: `The Perfect Mentor <dolores.polito@gmail.com>`,
        to: email,
        subject: "Email verification - The Perfect Mentor",
        text: "...",
        html: template,
      });
    } catch {
      return res
        .status(400)
        .json({ message: "algo salio mail en el send email" });
    }

    await user.save();

    res.json({
      succes: true,
      msg: "Registrado correctamente",
    });
  } catch {
    return res.json({
      success: false,
      msg: "Error al registrar el usuario",
    });
  }
};

const validateUserCtrl = async (req, res) => {
  try {
    // Obtener el token
    const { token } = req.params;
    // Verificar la data
    const data = await getTokenData(token);

    if (data === null) {
      return res.json({
        success: false,
        msg: "Error al obtener data",
      });
    }

    const { email, code } = data.data;
    const user = (await User.findOne({ email })) || null;

    if (user === null) {
      return res.json({
        success: false,
        msg: "Usuario no existe",
      });
    }

    // Verificar el código
    // if (code !== user.code) {
    //   return res.redirect("http://localhost:3000/error.html");
    // }

    // Actualizar usuario
    user.status = "VERIFIED";
    await user.save();

    // Redireccionar a la confirmación
    return res.redirect("http://localhost:3000/signin");
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "Error al confirmar usuario",
    });
  }
};

const loginCtrl = async ({ body }, res) => {
  const user = await User.findOne({ email: body.email });

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(body.password, user.password);

  if (!(user && passwordCorrect)) {
    return res.status(400).send({
      error: "invalid username or password",
    });
  }

  if (user.status === "UNVERIFIED") {
    return res.status(401).send({
      error: "unverified user",
    });
  }

  const token = generateToken(user);
  return res.status(200).send({ user, token });
};

const completeRegisterCtrl = async ({ body }, res) => {
  const filter = { email: body.email };
  let update = {
    fullName: body.fullName,
    role: body.role,
    country: body.country,
    age: body.age,
    language: body.language,
    description: body.description,
    skills: body.skills,
    profession: body.profession,
  };

  let updatedUser = await User.findOneAndUpdate(filter, update, {
    returnOriginal: false,
  });

  res.status(201).send(updatedUser);
};

const forgotPasswordCtrl = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.json({ message: "email is required" });
        //El return dentro de este if evita que se produzca el error "Cannot set headers after they are sent to the client" de Axios.
        return;
  }

  let verificationLink;

  try {
    const user = await User.findOne({ email });
    if (user === null) {
      res.json({
        success: false,
        msg: "Usuario no existe",
      });
    }
    const token = generateToken(user);
    verificationLink = `http://localhost:3000/changepass/${token}`;
    user.resetToken = token;
    await user.save();
  } catch (error) {
    res.json({
      message: error,
    });
  }

  try {
    await transporter.sendMail({
      from: `The Perfect Mentor <dolores.polito@gmail.com>`,
      to: email,
      subject: "Forgot Password - The Perfect Mentor",
      text: "...",
      html: `
             <b>Please click on the following link</b>
            <a href=${verificationLink}>${verificationLink}</a>
            `,
    });
    res.send("Check your email for a link to reset your password");
  } catch (error) {
    res.json({ message: error });
  }
};

const createNewPasswordCtrl = async (req, res) => {
  const { newPassword } = req.body;
  const resetToken = req.params.token;

  if (!(newPassword && resetToken)) {
    res.json({ message: "All fields required" });
  }

  let jwtPayload;
  let user;

  try {
    jwtPayload = jwt.verify(resetToken, process.env.SECRET);
    user = await User.find({ resetToken: resetToken });
  } catch (error) {
    res.json({ message: error });
  }

  try {
    let passwordHash = await encrypt(newPassword);
    let toFilter = { email: user[0].email };
    let toUpdate = { password: passwordHash };
    let bdUpdate = await User.findOneAndUpdate(toFilter, toUpdate, {
      returnOriginal: true,
    });
    res.json({ message: "Password Changed" });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  registerCtrl,
  loginCtrl,
  completeRegisterCtrl,
  validateUserCtrl,
  forgotPasswordCtrl,
  createNewPasswordCtrl,
};
