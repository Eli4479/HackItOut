const mongoose = require("mongoose");
const user = require("./user");
const team = require("./team");

const todoSchema = new mongoose.Schema({
  task_name: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    trim: true,
  },
  // user: {
  //   type: Array ,
  //   required: true,
  //   trim: true,
  // },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
