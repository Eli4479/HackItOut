const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const Team = require("../models/teams");


const getTodoOfPerson = async (req, res) => {
  try {
    const team_id = req.params.id;
    const team = await Team.findById(team_id);
    if (!team) {
      return res.status(404).send("Team not found");
    }
    const person_name = req.body.person_name;

    const person_id = team.members.find((person) => person.name === person_name);
    if (!person_id) {
      const leader = team.leader;
      if (leader.name === person_name) {
        let the_todo = [];
        for (let i = 0; i < team.todos.length; i++) {
          if (team.todos[i].assigned_to === leader._id) {
            the_todo.push(team.todos[i]);
          }
        }
        res.status(200).send(the_todo);
      }
      else {
        res.status(404).send("Person not found");
      }
    }
    else {
      let the_todo = [];
      for (let i = 0; i < team.todos.length; i++) {
        if (team.todos[i].assigned_to === person_id) {
          the_todo.push(team.todos[i]);
        }
      }
      res.status(200).send(the_todo);
    }
  }
  catch (err) {
    res.status(404).send(err);
  }
};



exports.getTodoOfPerson = getTodoOfPerson;