const express = require("express");
const router = express.Router();
const Method = require("../Schemas/Method");

router.get("/", async (req, res) => {
  try {
    const methods = await Method.find();
    res.json(methods);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch methods" });
  }
});

module.exports = router;
