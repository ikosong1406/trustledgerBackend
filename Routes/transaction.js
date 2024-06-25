const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../Schemas/UserDetails");
require("../Schemas/TransactionDetails");

const User = mongoose.model("UserInfo");
const Transaction = mongoose.model("Transaction");

router.post("/", async (req, res) => {
  const { userId, amount, type, walletAddress, method } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const userTransaction = {
      userId,
      amount,
      type,
      walletAddress,
      method,
      status: "pending",
      date: new Date(),
    };

    // Add the transaction object to the user's transactions array
    user.transactions.push(userTransaction);
    await user.save();

    res.json({
      message: "Transaction request sent for confirmation",
    });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
