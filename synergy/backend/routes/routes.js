const express = require("express");
const Route = require("express/lib/router/route");
const Router = express.Router();


Router.route("/register").post();//register
Router.route("/login").get();//login

Router.route("/user/id").post();//create team id of user
Router.route("/user/id").get();//join team id of user
Router.route("/user/id").put();//create team id of user

Router.route("/user/teams/id").get();//get team info of user
Router.route("/user/teams/todo/id").post();//create todo id of team
Router.route("/user/teams/todo/id").put();//update todo id of team
Router.route("/user/person/todo/id").get();//get todo of a person id of team

Router.route("/user/teams/chat/id").post();//create chat id of team


module.exports = Router;