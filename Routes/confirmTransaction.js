const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");
const AdminTransaction = require("../Schemas/AdminTransaction");

router.post("/", async (req, res) => {
  const { transactionId } = req.params;

  try {
    // Find the admin transaction by ID
    const adminTransaction = await AdminTransaction.findOne(transactionId);

    if (!adminTransaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    // Update the status to confirmed
    adminTransaction.status = "confirmed";
    await adminTransaction.save();

    // Perform the transaction confirmation logic here (e.g., update user's transaction list)
    // For demonstration, we're assuming you have a method in your User model to handle this
    // await User.confirmTransaction(adminTransaction);

    res.json({ message: "Transaction confirmed", status: "ok" });
  } catch (error) {
    console.error("Error confirming transaction:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
