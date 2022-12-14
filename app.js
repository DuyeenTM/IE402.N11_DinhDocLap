const express = require("express");
const cors = require("cors");
const indexRouter = require("./src/api");
const app = express();
const logger = require("morgan");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/api/v1", indexRouter);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found..." });
});
module.exports = app;
