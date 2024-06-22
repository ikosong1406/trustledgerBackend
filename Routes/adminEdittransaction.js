const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Transaction = require("../Schemas/AdminTransaction");

router.post("/", async (req, res) => {
  try {
    const { transactionId, status } = req.body;

    // Filter out empty or null values from the update data
    const updateData = {};
    if (typeof status === "string" && status.trim() !== "") {
      updateData.status = status.trim();
    }

    const updatedUser = await Transaction.findOneAndUpdate(
      { _id: transactionId },
      updateData,
      { new: true } // Return the updated document
    );
    res.json({ message: "Transaction updated successfully", status: "ok" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
