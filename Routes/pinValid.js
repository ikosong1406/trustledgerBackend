const mongoose = require("mongoose");
require("../Schemas/UserDetails");

const User = mongoose.model("UserInfo");

module.exports = async function (req, res, next) {
  const { userId, pin } = req.body;

  if (!pin) {
    return res.status(400).json({ msg: "PIN is required" });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (user.pin !== pin) {
      return res.status(401).json({ msg: "Invalid PIN" });
    }

    res.status(200).json({ status: "ok" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
