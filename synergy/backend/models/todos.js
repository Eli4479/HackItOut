const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
  todo_name: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["Incomplete", "Complete", "In Progress"],
    default: "incomplete",
    required: true,
  },
  assigned_to: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
