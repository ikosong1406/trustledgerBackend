const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const allUsers = require("./Routes/allUsers");
const allTransaction = require("./Routes/allTransaction");
const userdata = require("./Routes/userdata");
const register = require("./Routes/register");
const login = require("./Routes/login");
const verifyEmail = require("./Routes/verifyEmail");
const forgotPassword = require("./Routes/forgotPassword");
const resetPassword = require("./Routes/resetPassword");
const { isResetTokenValid } = require("./utils/user");
const adminDeposit = require("./Routes/adminDeposit");
const adminWithdrawal = require("./Routes/adminWithdrawal");
const transaction = require("./Routes/transaction");
const confirmTransaction = require("./Routes/confirmTransaction");
const createPin = require("./Routes/createPin");
const assetSecurity = require("./Routes/assetSecurity");
const staking = require("./Routes/staking");
const pinValid = require("./Routes/pinValid");

const PORT = process.env.PORT || 5001;

const mongoUrl =
  "mongodb+srv://trustledger:trustledger@cluster0.pwakngi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });

require("./Schemas/UserDetails");
const User = mongoose.model("UserInfo");

app.use("/login", login);
app.use("/register", register);
app.use("/createPin", createPin);
app.use("/userdata", userdata);
app.use("/allUsers", allUsers);
app.use("/allTransaction", allTransaction);
app.use("/assetSecurity", assetSecurity);
app.use("/verifyEmail", verifyEmail);
app.use("/forgotPassword", forgotPassword);
app.use("/resetPassword", isResetTokenValid, resetPassword);
app.use("/adminDeposit", adminDeposit);
app.use("/adminWithdrawal", adminWithdrawal);
app.use("/transaction", transaction);
app.use("/staking", staking);
app.use("/confirmTransaction", confirmTransaction);
app.use("/pinValid", pinValid);

app.listen(PORT, () => {
  console.log("Server Started");
});
