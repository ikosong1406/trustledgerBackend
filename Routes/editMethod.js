const express = require("express");
const router = express.Router();
const Method = require("../Schemas/Method");

router.post("/", async (req, res) => {
  try {
    const { id, name, network, walletAddress } = req.body;
    const updateData = {};
    if (typeof name === "string" && name.trim() !== "") {
      updateData.name = name.trim();
    }
    if (typeof network === "string" && network.trim() !== "") {
      updateData.network = network.trim();
    }
    if (typeof walletAddress === "string" && walletAddress.trim() !== "") {
      updateData.walletAddress = walletAddress.trim();
    }

    const updatedMethod = await Method.findOneAndUpdate(
      { _id: id },
      updateData,
      { new: true } // Return the updated document
    );
    res.json({ message: "Deposit Method updated successfully", status: "ok" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update method" });
  }
});

module.exports = router;
