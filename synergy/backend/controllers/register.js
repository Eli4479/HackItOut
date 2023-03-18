const express = require("express");
const Router = express.Router();
const User = require("../models/user");

const register = async (req, res) => {
  try {
    const { user_name, email, password, confirm_password } = req.body;
    if (password !== confirm_password) {
      return res.status(400).json({ message: "Password do not match" });
    }
    else {
      const user = await User.create({
        username: user_name,
        email,
        password,
        confirm_password,
        teams: [],
        is_leader_of: [],
        is_member_of: [],
      });
      return res.status(200).json({ user });
    }

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.register = register;