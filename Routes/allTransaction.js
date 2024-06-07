const express = require("express");
const router = express.Router();
const AdminTransaction = require("../Schemas/AdminTransaction");

router.get("/", async (req, res) => {
  try {
    const list = await AdminTransaction.find(); // Fetch all users from the database
    res.json(list); // Send the users as JSON response
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
