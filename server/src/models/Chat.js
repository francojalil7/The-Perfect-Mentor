const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChatSchema = new Schema({
  users: [
    {
      type: Schema.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Chat", ChatSchema);
