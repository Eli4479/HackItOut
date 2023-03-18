const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const Team = require("../models/teams");
const Todo = require("../models/todo");

const updateStatusOfTodo = async (req, res) => {
  try {

    const todo_id = req.params.id;
    const todo = await Todo.findById(todo_id);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    const status = req.body.status;
    todo.status = status;
    await todo.save();
    res.status(200).send(todo);


  }
  catch (err) {
    res.status(404).send(err);
  }
};


exports.updateStatusOfTodo = updateStatusOfTodo;