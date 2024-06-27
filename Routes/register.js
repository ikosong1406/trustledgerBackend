const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { generateOTP, mailTransport } = require("../utils/mail");
const VerificationToken = require("../Schemas/VerificationToken");
const { verifyCode } = require("../Templates/verifyCode");
require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");

router.post("/", async (req, res) => {
  const { firstname, lastname, email, password, role } = req.body;
  try {
    const oldUser = await User.findOne({ email: email });
    if (oldUser) {
      return res
        .status(400)
        .json({ status: "error", data: "User already exists!!" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: encryptedPassword,
      role: role,
    });

    // mailTransport().sendMail({
    //   from: "support@trustleger.com",
    //   to: newUser.email,
    //   subject: "Verify Your Email Account",
    //   html: verifyCode(
    //     "Congratulations! Your account has been successfully verified. You are now part of our amazing community",
    //     "Start exploring all the features and functionalities of our app by clicking the button below:"
    //   ),
    // });

    return res.status(200).json({
      status: "ok",
      data: "Account Created, Login with your registered details",
    });
  } catch (error) {
    console.error("Error during user registration:", error); // Log the error for debugging
    return res.status(500).json({ status: "error", data: error.message });
  }
});

module.exports = router;
