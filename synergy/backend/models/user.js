const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  confirm_password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return (
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) &&
          v.endsWith("itbhu.ac.in")
        );
      },
    },
  },
  // teams: {
  //   type: Array,
  //   required: true,
  //   trim: true,
  //   default: 0,
  // },
  // is_leader_of: {
  //   type: Array,
  //   required: true,
  //   trim: true,
  //   default: 0,
  // },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  ],
  is_leader_of: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
