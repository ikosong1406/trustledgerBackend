const crypto = require("crypto");
const { promisify } = require("util");

// Promisify the crypto.randomBytes function
const randomBytesAsync = promisify(crypto.randomBytes);

exports.sendError = (res, error, status = 401) => {
  res.status(status).json({ success: false, error });
};

exports.createRandomBytes = async () => {
  try {
    const buff = await randomBytesAsync(30);
    const token = buff.toString("hex");
    return token;
  } catch (err) {
    throw new Error("Failed to generate random bytes.");
  }
};
