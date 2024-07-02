const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   secure: true,
//   auth: {
//     user: "alexandervirtuous14@gmail.com",
//     pass: "odmkcsiojybfavpr",
//   },
// });

const transporter = nodemailer.createTransport({
  host: "mail.trustleger.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "support@trustleger.com", // your email
    pass: "Trustleger14", // your email password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendMail(to, subject, text, html) {
  const mailOptions = {
    from: "support@trustleger.com",
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
