const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");

const JWT_SECRET = "qwerty123456";

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ data: "User doesn't exist" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ data: "Invalid credentials" });
  }

  const role = user.role;

  const status = user.status;

  const token = jwt.sign(
    { email: user.email, role: role, status: status },
    JWT_SECRET
  );

  res.status(200).json({ token, role, status, message: "Login successful" });
});

module.exports = router;
