// AdminTransaction schema
const mongoose = require("mongoose");

const AdminTransactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  walletAddress: {
    type: String,
  },
  type: {
    type: String,
    enum: ["deposit", "withdrawal"],
    required: true,
  },
  method: {
    type: String,
    enum: ["tether", "bitcoin", "paypal"],
  },
  status: {
    type: String,
    enum: ["pending", "confirmed"],
    default: "pending",
  },
});

const AdminTransaction = mongoose.model(
  "AdminTransaction",
  AdminTransactionSchema
);

module.exports = AdminTransaction;
