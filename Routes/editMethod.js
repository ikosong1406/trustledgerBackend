const express = require("express");
const router = express.Router();
const Method = require("../Schemas/Method");

router.put("/", async (req, res) => {
  const { id } = req.params;
  const { name, network, walletAddress, type } = req.body;
  try {
    const method = await Method.findByIdAndUpdate(
      id,
      { name, network, walletAddress, type },
      { new: true }
    );
    res.json(method);
  } catch (error) {
    res.status(500).json({ error: "Failed to update method" });
  }
});

module.exports = router;
