const express = require("express");
const cors = require("cors");
const indexRouter = require("./src/api");
const app = express();
const logger = require("morgan");
const path = require("path");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/api/v1", indexRouter);

module.exports = app;
