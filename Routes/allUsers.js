const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");

router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.json(users); // Send the users as JSON response
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
