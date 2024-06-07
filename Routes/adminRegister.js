const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = require("../Schemas/Admin");

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = new Admin({ username, password });
    await admin.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    console.error("Error creating admin:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
