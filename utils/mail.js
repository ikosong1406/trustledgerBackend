const nodemailer = require("nodemailer");

exports.generateOTP = () => {
  let otp = "";
  for (let i = 0; i < 4; i++) {
    const randVal = Math.round(Math.random() * 9);
    otp = otp + randVal;
  }
  return otp;
};

exports.mailTransport = () => {
  return nodemailer.createTransport({
    host: "mail.trustledger.com",
    port: 587,
    auth: {
      user: "support@trustleger.com",
      pass: "Trustleger14",
    },
  });
};
