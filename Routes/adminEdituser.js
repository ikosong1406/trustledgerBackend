const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../Schemas/UsersDetails");

const User = mongoose.model("UserInfo");

router.post("/", async (req, res) => {
  try {
    const { userId, firstname, lastname, email, balance, status } = req.body;

    // Filter out empty or null values from the update data
    const updateData = {};
    if (typeof firstname === "string" && firstname.trim() !== "") {
      updateData.firstname = firstname.trim();
    }
    if (typeof lastname === "string" && lastname.trim() !== "") {
      updateData.lastname = lastname.trim();
    }
    if (typeof email === "string" && email.trim() !== "") {
      updateData.email = email.trim();
    }
    if (typeof balance === number && balance.trim() !== "") {
      updateData.balance = balance.trim();
    }
    if (typeof status === "string" && status.trim() !== "") {
      updateData.status = status.trim();
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      updateData,
      { new: true } // Return the updated document
    );
    res.json({ message: "Profile updated successfully", status: "ok" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
