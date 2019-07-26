const express = require("express");
const router = express.Router();
const Player = require("../models/player");

router.get("/", (req, res) => {
  res.send("hello");
});
router.post("/add", (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer
    .save()
    .then(item => {
      res.send(`${item.fname} saved to database`);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;
