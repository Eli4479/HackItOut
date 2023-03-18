const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const Team = require("../models/teams");

const getUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.status(200).send(user);
  }
  catch (err) {
    res.status(404).send(err);
  }
};


exports.getUser = getUser;