const mongoose = require("mongoose");
require("mongoose-type-email");
const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    user: {
      type: String,
      unique: true,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
    email: {
      type: mongoose.SchemaTypes.Email,
    },
    avatar: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    friends: [String],
    friendPending: [String],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("accounts", AccountSchema);
