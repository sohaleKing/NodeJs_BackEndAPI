const express = require("express");

const app = express();
app.use(express.static("app"));

app.get("/", (req, res) => {
  res.json({ message: "Hello HatchWays" });
});

require("./app/routes/hatchways.routes")(app);

const server = app.listen(2022, () => {
  console.log("listening to 2022 now!");
});
module.exports = server;
