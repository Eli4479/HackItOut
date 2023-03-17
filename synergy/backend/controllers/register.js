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
        user_name,
        email,
        password,
        confirm_password,
      });
      return res.status(201).json({ user });
    }

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.register = register;