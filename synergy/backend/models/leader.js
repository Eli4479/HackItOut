const mongoose = require("mongoose");
const user = require("./user");
const course = require("./course");

const leaderSchema = new mongoose.Schema({
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
  //   course:
  //     [
  //       {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: "course",
  //       }
  //     ],
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
});

const Leader = mongoose.model("Leader", leaderSchema);

module.exports = Leader;
