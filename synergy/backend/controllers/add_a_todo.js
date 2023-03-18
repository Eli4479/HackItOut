const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const Team = require("../models/teams");
const Todo = require("../models/todos");


const addATodo = async (req, res) => {
  try {
    const { todo_name, assigned_to } = req.body;
    const team_id = req.params.id;
    const team = await Team.findById(team_id);
    if (!team) {
      return res.status(404).send("Team not found");
    }
    //  find the user with the name assigned_to in the team
    // const user = team.members.find((person) => person.name === assigned_to);

    const user = await User.findOne({ name: assigned_to });

    if (!user) {
      return res.status(404).send("User not found");
    }
    const todo = await Todo.create({
      todo_name,
      status: "Incomplete",
      assigned_to: user._id,
    });
    await todo.save();
    team.todos.push(todo._id);
    await team.save();
    res.status(200).send(todo);
  }
  catch (err) {
    res.status(404).send(err);
  }
};


exports.addATodo = addATodo;