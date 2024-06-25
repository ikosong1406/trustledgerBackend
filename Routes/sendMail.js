const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/mail");

router.post("/", async (req, res) => {
  try {
    const { to, subject, body } = req.body;
    await sendEmail(to, subject, body);
    res.status(200).send({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Failed to send email" });
  }
});

module.exports = router;
