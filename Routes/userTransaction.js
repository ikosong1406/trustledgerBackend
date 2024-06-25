const express = require("express");
const router = express.Router();
require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");

router.get("/", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user.transactions);
  } catch (error) {
    console.error("Error fetching user transactions:", error);
    res.status(500).json({ error: "Server error" });
  }
});
