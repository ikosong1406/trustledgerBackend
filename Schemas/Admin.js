const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    collection: "AdminInfo",
  }
);

// Hash the password before saving to the database
AdminSchema.pre("save", async function (next) {
  const admin = this;
  if (!admin.isModified("password")) {
    return next();
  }
  const hashedPassword = await bcrypt.hash(admin.password, 10);
  admin.password = hashedPassword;
  next();
});

// Create a method to compare passwords
AdminSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
