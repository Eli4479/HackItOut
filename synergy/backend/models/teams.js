const mongoose = require("mongoose");
const user = require("./user");

const teamSchema = new mongoose.Schema({
  team_code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  team_name: {
    type: String,
    required: true,
    trim: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
