const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");
// const AdminTransaction = require("../Schemas/AdminTransaction");
const UserTransaction = require("../Schemas/TransactionDetails");

router.post("/", async (req, res) => {
  const { userId, amount, type, walletAddress, method } = req.body;

  // Validate user ID (optional, depending on your authentication system)

  try {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Validate amount (optional, depending on your requirements)
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const userTransaction = await UserTransaction.create({
      userId,
      amount,
      type,
      walletAddress,
      method,
    });

    res.json({
      message: "Transaction request sent for confirmation",
      // adminTransaction,
    });
  } catch (error) {
    console.error("Error creating admin transaction:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
