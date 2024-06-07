const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { isValidObjectId } = require("mongoose");
const { sendError } = require("./helper");
const ResetToken = require("../Schemas/resetToken");
require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");

exports.isResetTokenValid = async (req, res, next) => {
  const { token, id } = req.query;
  if (!token || !id) return sendError(res, "Invalid request!");

  if (!isValidObjectId(id)) return sendError(res, "Invalid User!");

  const user = await User.findById(id);
  if (!user) return sendError(res, "user not found!");

  const resetToken = await ResetToken.findOne({ owner: user._id });
  if (!resetToken) return sendError(res, "ResetToken not found!");

  const isValid = await resetToken.compareToken(token);
  if (!isValid) return sendError(res, "Reset token is invalid!");

  req.user = user;
};
