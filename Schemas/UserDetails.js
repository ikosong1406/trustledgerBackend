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
    pin: {
      type: String,
      required: false,
      minlength: 4,
      maxlength: 4,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    verified: {
      type: Boolean,
      default: false,
      required: true,
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
      // validate: {
      //   validator: function (v) {
      //     return Array.isArray(v) && v.length === 12;
      //   },
      //   message: "Security phrase must be an array of 12 words",
      // },
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
