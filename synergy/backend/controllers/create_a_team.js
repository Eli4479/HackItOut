const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const Team = require("../models/teams");

const createTeam = async (req, res) => {
  try {

    const { teamName, teamcode } = req.body;
    const user_id = req.params.id;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    const team = await Team.create({
      name: teamName,
      code: teamcode,
      leader: user_id,
      members: [user_id],
      todos: [],
      chats: [],
    });
    await team.save();
    user.teams.push(team._id);
    user.is_leader_of.push(team._id);
    await user.save();
    res.status(200).send(team);
  }
  catch (err) {
    res.status(404).send(err);
  }
};


exports.createTeam = createTeam;