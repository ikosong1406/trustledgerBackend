const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const VerificationToken = require("../Schemas/VerificationToken");
const { isValidObjectId } = require("mongoose");
const { confirmVerification } = require("../Templates/confirmVerification");
const { generateOTP, mailTransport } = require("../utils/mail");
require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");

// Define sendError function to handle error responses
const sendError = (res, message) => {
  return res.status(400).json({ success: false, message });
};

router.post("/", async (req, res) => {
  const { userId, otp } = req.body;
  if (!userId || !otp.trim())
    return sendError(res, "Invalid request, missing parameters");

  if (!isValidObjectId(userId))
    return sendError(res, "Invalid request, missing parameter !");

  const user = await User.findById(userId);
  if (!user) return sendError(res, "Sorry, user not found");

  if (user.verified) return sendError(res, "This account is already verified");

  const token = await VerificationToken.findOne({ owner: user._id });
  if (!token) return sendError(res, "Sorry, token not found");

  const isMatched = await token.compareToken(otp);
  if (!isMatched) return sendError(res, "Please provide a valid token");

  user.verified = true;

  await VerificationToken.findByIdAndDelete(token._id);
  await user.save();

  const OTP = generateOTP();
  const verificationToken = new VerificationToken({
    owner: user._id,
    token: OTP,
  });

  mailTransport().sendMail({
    from: "TrustLedgeremailverification@gmail.com",
    to: user.email,
    subject: "Verify Your Email Account",
    html: confirmVerification(
      "Congratulations! Your account has been successfully verified. You are now part of our amazing community",
      "Start exploring all the features and functionalities of our app by clicking the button below:"
    ),
  });
  res.json({ success: true, message: "Your email is verified", status: "ok" });
});

module.exports = router;
