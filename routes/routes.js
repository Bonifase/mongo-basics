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

router.get("/players", (req, res) => {
  Player.find()
    .then(players => {
      res.send(players);
    })
    .catch(err => {
      res.status(400).send("unable to query the database");
    });
});

router.post("/players/:_id", (req, res) => {
  let id = req.params._id;
  Player.findByIdAndUpdate(id, req.body)
    .then(player => {
      res.send(`${player.fname} updated to database`);
    })
    .catch(err => {
      res.status(400).send({ error: "unable to update to database" });
    });
});
router.get("/players/:_id", (req, res) => {
  let id = req.params._id;
  Player.findById(id)
    .then(player => {
      res.send(player);
    })
    .catch(err => {
      res.status(404).send({ error: "player with such id not found" });
    });
});

module.exports = router;
