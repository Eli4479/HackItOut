const express = require("express");
const Router = express.Router();
const User = require("../models/user");


const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const profile = await User.findOne(
      {
        email: email,
        password: password,
      }
    )
    if (profile) {
      return res.status(201).json({ profile });
    }
    else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  }
  catch (error) {
    return res.status(400).json({ error: error.message });
  }
};



exports.login = login;