const express = require("express");
const Router = express.Router();
const Todo = require("../models/todos");


const updateATodo = async (req, res) => {

  try {
    const todo_id = req.params.id;
    const the_todo = await Todo.findById(todo_id);
    if (!the_todo) {
      return res.status(404).send("Todo not found");
    }
    // make status shift one index forward
    const status = ["Incomplete", "In Progress", "Complete"];
    const current_status = the_todo.status;
    if (current_status === "Complete") {
      return res.status(404).send("Todo already completed");
    }
    const new_status = status[status.indexOf(current_status) + 1];
    the_todo.status = new_status;
    await the_todo.save();
    res.status(200).send(the_todo);

  }
  catch (err) {
    res.status(404).send(err);
  }

}

exports.updateATodo = updateATodo;