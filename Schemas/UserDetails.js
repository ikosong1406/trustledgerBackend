const mongoose = require("mongoose");
const Transaction = require("./TransactionDetails");
const Staking = require("./stakeSchema");

const UserDetailsSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: { type: String, unique: true },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "blocked"],
      default: "active",
    },
    dateOfBirth: {
      type: String,
    },
    balance: {
      type: Number,
      default: 0,
    },
    stakingBalance: {
      type: Number,
      default: 0,
    },
    securityPhrase: {
      type: [String],
      required: false,
    },
    staking: [Staking.schema],
    bitcoin: { type: Number, default: 0 }, // BTC
    ethereum: { type: Number, default: 0 }, // ETH
    solana: { type: Number, default: 0 }, // SOL
    ripples: { type: Number, default: 0 }, // XRP
    stellar: { type: Number, default: 0 }, // DOGE
    transactions: [Transaction.schema],
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsSchema);
