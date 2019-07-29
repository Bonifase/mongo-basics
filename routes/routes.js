const express = require("express");
const router = express.Router();
const Player = require("../models/player");

router.get("/player/home", (req, res) => {
  res.send("hello");
});
router.post("/player/add", (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer
    .save()
    .then(item => {
      res.send({ message: `${item.fname} saved to database` });
    })
    .catch(err => {
      res.status(400).send({ error: "unable to save to database" });
    });
});

router.get("/players", (req, res) => {
  Player.find()
    .then(players => {
      res.send(players);
    })
    .catch(err => {
      res.status(400).send({ error: "unable to query the database" });
    });
});

router.post("/player/:_id", (req, res) => {
  let id = req.params._id;
  Player.findByIdAndUpdate(id, req.body)
    .then(player => {
      res.send({ message: `${player.fname} updated to database` });
    })
    .catch(err => {
      res.status(400).send({ error: "unable to update to database" });
    });
});
router.get("/player/:_id", (req, res) => {
  let id = req.params._id;
  Player.findById(id)
    .then(player => {
      res.send(player);
    })
    .catch(err => {
      res.status(404).send({ error: "player with such id not found" });
    });
});
router.delete("/player/:_id", (req, res) => {
  let id = req.params._id;
  Player.findByIdAndDelete(id)
    .then(player => {
      res.send({ message: `${player.fname} deleted from database` });
    })
    .catch(err => {
      res.status(404).send({ error: "playermlll with such id not found" });
    });
});

module.exports = router;
