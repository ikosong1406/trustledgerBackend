// const nodemailer = require("nodemailer");

// exports.generateOTP = () => {
//   let otp = "";
//   for (let i = 0; i < 4; i++) {
//     const randVal = Math.round(Math.random() * 9);
//     otp = otp + randVal;
//   }
//   return otp;
// };

// exports.mailTransport = () => {
//   return nodemailer.createTransport({
//     host: "mail.trustledger.com",
//     port: 587,
//     auth: {
//       user: "support@trustleger.com",
//       pass: "Trustleger14",
//     },
//   });
// };

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.trustledger.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "support@trustleger.com",
    pass: "Trustleger14",
  },
});

const sendEmail = (to, subject, body) => {
  const mailOptions = {
    from: "support@trustleger.com",
    to,
    subject,
    text: body,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
