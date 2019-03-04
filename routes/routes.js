const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});
router.post("/add", (req, res) => {
  res.send("Posted");
});

module.exports = router;
