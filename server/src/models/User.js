const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.default.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
  },
  role: {
    type: String,
  },
  age: {
    type: String,
  },
  isMentor: {
    type: Boolean,
    default: false,
  },
  isMentee: {
    type: Boolean,
    default: false,
  },
  country: {
    type: String,
  },
  profession: {
    type: Array,
  },
  description: {
    type: String,
  },
  avatar: {
    type: String,
  },
  language: {
    type: Array,
  },
  preferences: {
    type: Array,
  },
  assignedMentee: {
    type: String,
  },
  assignedMentor: {
    type: String,
  },
  created: { 
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model("User", UserSchema);
