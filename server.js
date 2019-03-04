const express = require("express");
const routes = require("./routes/routes");
require("./models/db.connection");

const app = express();

app.use(express.json());

app.use("/data", routes);

app.listen(4000, () => console.log(`server running on port ${4000}`));
