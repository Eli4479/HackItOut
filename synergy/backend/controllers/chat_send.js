const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const Team = require("../models/teams");
const Todo = require("../models/todo");
const Message = require("../models/message");

const sendAchat = async (req, res) => {
  try {
    const { chat_message, sent_to, sent_from } = req.body;
    const team_id = req.params.id;
    // const chat_id = req.params.id;
    const team = await Team.findById(team_id);
    // const chat = await Team.findById(chat_id);
    if (!team) {
      return res.status(404).send("Team not found");
    }
    // if (!chat) {
    //   return res.status(404).send("Chat not found");
    // }
    const message = await Message.create({
      sender: sent_from,
      receiver: sent_to,
      content: chat_message,
      to_everyone,
    });
    await message.save();

    await team.save();
    res.status(200).send(message);
  } catch (err) {
    res.status(404).send(err);
  }
};
