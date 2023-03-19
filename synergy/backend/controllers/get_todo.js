const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const Team = require("../models/teams");
const Todo = require("../models/todos");

const getTodo = async (req, res) => {
  try {
    const todo_id = req.params.id;

    const the_todo = await Todo.findById(todo_id);
    if (!the_todo) {
      return res.status(404).send("Todo not found");
    }
    res.status(200).send(the_todo);




  }
  catch (err) {
    res.status(404).send(err);
  }

}


exports.getTodo = getTodo;