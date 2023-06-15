const mongoose = require("mongoose");

const userCredential_Schema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    pass: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const usersCreds_model = mongoose.model(
  "usersLogDetails",
  userCredential_Schema
);

module.exports = { usersCreds_model };
