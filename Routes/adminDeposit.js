const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");

router.post("/", async (req, res) => {
  const { userId, amount } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { _id: userId },
      {
        $inc: { totalbalance: amount },
        $push: { transactions: { type: "Deposit", amount } },
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "Deposit successful", status: "ok" });
  } catch (err) {
    console.error("Error depositing amount:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
