const mongoose = require("mongoose");

const stakingSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "completed"],
    default: "active",
  },
});

module.exports = mongoose.model("Staking", stakingSchema);
