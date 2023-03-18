const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const Team = require("../models/teams");

const joinTeam = async (req, res) => {
  try {
    const { teamcode } = req.body;
    console.log(teamcode);
    const user_id = req.params.id;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    const Teams = await Team.find({ code: teamcode })
    if (!Teams) {
      return res.status(404).send("Team not found");
    }
    user.is_member_of.push(Teams._id);
    await user.save();
    Team.members.push(user_id);
    await Team.save();
    res.status(200).send("Team joined");
  }
  catch (err) {
    res.status(404).send(err);
  }
};


exports.joinTeam = joinTeam;