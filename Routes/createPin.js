const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");

router.post("/", async (req, res) => {
  try {
    const { userId, pin } = req.body;

    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    user.pin = pin;
    await user.save();
    res.json({ msg: "PIN created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
