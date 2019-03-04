const mongoose = require("mongoose");
require("./player");

mongoose.connect(
  "mongodb://localhost:27017/playerDB",
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("Database Connection Established");
    } else {
      console.log(err);
    }
  }
);
