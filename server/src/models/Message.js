const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageSchema = new Schema({
  from: {
    type: Schema.ObjectId,
    ref: "User",
  },
  to: {
    type: Schema.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
  },
  chat: {
    type: Schema.Types.ObjectId,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
