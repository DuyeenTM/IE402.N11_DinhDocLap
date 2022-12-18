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

app.use(express.static(__dirname + "/src"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./src/page/index.html"));
});
app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "./src/page/login.html"));
});
app.get("/visit", function (req, res) {
  res.sendFile(path.join(__dirname, "./src/page/visit.html"));
});
app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "./src/page/contact.html"));
});
app.get("/update", function (req, res) {
  res.sendFile(path.join(__dirname, "./src/page/update.html"));
});
app.get("/3dMap", function (req, res) {
  res.sendFile(path.join(__dirname, "./src/page/render.html"));
});

module.exports = app;
