const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { sendMail } = require("../utils/mail");
const { Transactions } = require("../Templates/transaction");

require("../Schemas/UserDetails");
require("../Schemas/TransactionDetails");

const User = mongoose.model("UserInfo");
const Transaction = mongoose.model("Transaction");

router.post("/", async (req, res) => {
  const { userId, amount, type, walletAddress, method, profit, name, lname } =
    req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const transactionDate = new Date();
    const userTransaction = {
      userId,
      amount,
      name,
      lname,
      profit,
      type,
      walletAddress,
      method,
      status: "pending",
      date: transactionDate,
    };

    if (type === "deposit") {
      const dueDate = new Date(transactionDate.getTime() + 72 * 60 * 60 * 1000);
      userTransaction.dueDate = dueDate;
    }

    const newTransaction = new Transaction(userTransaction);
    await newTransaction.save();

    user.transactions.push(newTransaction);
    await user.save();

    sendMail(
      user.email,
      "Transaction Confirmation",
      "",
      Transactions(user.firstname, userTransaction.amount, userTransaction.type)
    );

    res.json({
      message: "Transaction request sent for confirmation",
    });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
