const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
require("./models/db.connection");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/manage", routes);

app.listen(4000, () => console.log(`server running on port ${4000}`));

module.exports = app;
