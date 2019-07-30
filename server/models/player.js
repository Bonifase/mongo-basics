const mongoose = require("mongoose");

const playerShema = new mongoose.Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  country: {
    type: String
  },
  city: {
    type: String
  },
  team: {
    type: String
  },
  goals: {
    type: Number
  },
  photo: {
    type: String
  }
});

module.exports = mongoose.model("Player", playerShema);
