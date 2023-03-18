const express = require("express");
const Route = require("express/lib/router/route");
const Router = express.Router();
const { register } = require("../controllers/register");
const { login } = require("../controllers/login");
const { createTeam } = require("../controllers/create_a_team");
const { joinTeam } = require("../controllers/join_a_team");
const { getTeamInfo } = require("../controllers/get_team_info");
const { addATodo } = require("../controllers/add_a_todo");
const { getUser } = require("../controllers/get_user_details");

Router.route("/register").post(register);//register
Router.route("/login").post(login);//login
Router.route("/user/:id").get(getUser);//get user id of user
Router.route("/user/:id").post(createTeam);//create team id of user
// problem here
Router.route("/user/:id").put(joinTeam);//join team id of user


Router.route("/user/teams/:id").get(getTeamInfo);//get team info of user
Router.route("/user/teams/todo/:id").post(addATodo);//create todo id of team
Router.route("/user/teams/todo/:id").put();//update todo id of todo
Router.route("/user/teams/todo/:id").get();//get todo of a team id of team



module.exports = Router;