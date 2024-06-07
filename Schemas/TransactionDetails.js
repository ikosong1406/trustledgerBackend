// transaction.js
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Deposit", "Withdrawal", "Buy", "Sell"],
    required: true,
  },
  amount: {
    type: Number,
  },
  coinName: {
    type: String,
  },
  quantity: {
    type: String,
  },
  price: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
