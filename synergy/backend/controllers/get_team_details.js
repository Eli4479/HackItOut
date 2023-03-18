const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const Team = require("../models/teams");

const getTeamDetails = async (req, res) => {
  try {
    const team_id = req.params.id;
    const team = await Team.findById(team_id);
    if (!team) {
      return res.status(404).send("Team not found");
    }
    res.status(200).send(team);
  }
  catch (err) {
    res.status(404).send(err);
  }
};


exports.getTeamDetails = getTeamDetails;