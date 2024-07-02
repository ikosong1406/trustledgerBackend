const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../Schemas/UserDetails");
const { sendMail } = require("../utils/mail");
const { Stake } = require("../Templates/Stake");

const User = mongoose.model("UserInfo");

router.post("/", async (req, res) => {
  try {
    const { userId, amount, days, rate } = req.body;

    // Convert amount to an integer
    // const stakedAmount = parseInt(amount, 10);

    if (isNaN(amount)) {
      return res.status(400).json({ msg: "Invalid amount provided" });
    }

    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Deduct the staked amount from the user's balance
    user.balance -= amount;

    // Update the staking balance with the staked amount
    user.stakingBalance += amount;

    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + days);

    const newStake = {
      amount: amount,
      days,
      rate,
      startDate,
      endDate,
      status: "active",
    };

    user.staking.push(newStake);
    await user.save();

    sendMail(
      user.email,
      "Fixed Capital Confirmation",
      "",
      Stake(user.firstname, newStake.amount, newStake.days, newStake.days)
    );

    res.json({ msg: "Staking initiated successfully", stake: newStake });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/complete", async (req, res) => {
  try {
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const now = new Date();
    let updated = false;

    user.staking.forEach((stake) => {
      if (stake.status === "active" && now >= new Date(stake.endDate)) {
        const interest = (stake.amount * stake.rate * stake.days) / (100 * 365);
        const totalAmount = stake.amount + interest;

        // Add the staked amount and interest to the user's balance
        user.balance += totalAmount;

        // Deduct the staked amount from the staking balance
        user.stakingBalance -= stake.amount;

        stake.amount = totalAmount;
        stake.status = "completed";
        updated = true;
      }
    });

    if (updated) {
      await user.save();
    }

    res.json({ msg: "Stakes checked and updated", balance: user.balance });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
