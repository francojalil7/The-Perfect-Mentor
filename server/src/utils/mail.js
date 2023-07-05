const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();

const { EMAIL, PASSWORD } = process.env

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

transporter.verify().then(() => {
  console.log("Verifing Transporter Nodemailer: OK");
});


const getTemplate = (userName, token) => {
  return `  <div id="email___content">
      
  <h2>Hi ${userName} </h2>
  <p>We are happy you signed up for The Perfect Mentor. To start exploring the App please confirm your email address.</p>
  <a
      href=`${process.env.REACT_APP_BACKEND_URI}/auth/validateUser/${token}`
      target="_blank"
  >Confirm your account</a>

  <p>Welcome to The Perfect Mentor.</p>
</div>`;
};




module.exports = {
  getTemplate,
  transporter,
};
