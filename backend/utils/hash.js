const crypto = require("crypto");

module.exports = (content) => {
  return crypto
    .createHash("sha256")
    .update(content)
    .digest("hex");
};