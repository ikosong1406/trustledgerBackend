const mongoose = require("mongoose");

const methodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  network: { type: String, required: true },
  walletAddress: { type: String, required: true },
});

module.exports = mongoose.model("Method", methodSchema);
