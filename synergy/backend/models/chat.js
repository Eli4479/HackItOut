const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  team: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});
