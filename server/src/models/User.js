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
  status: {
    type: String,
    required: true,
    default: "UNVERIFIED",
  },
  code: { type: String, required: false },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
  },
  age: {
    type: String,
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
  skills: {
    type: Array,
  },
  joinedDate: {
    type: Date,
    default: Date.now,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  registerForm: {
    type: Boolean,
    default: false,
  },
  resetToken: {
    type: String,
  },
  relations: {
    type: Array,
    default: [{ id: 0, match: "", userName: ""}],
  },
  notifications: {
    type: Array,
    default: [{id: 0, pending: false}]
  }
});

module.exports = mongoose.model("User", UserSchema);
