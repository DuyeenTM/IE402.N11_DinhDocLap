const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Node = new Schema({
  x: Number,
  y: Number,
  z: Number,
});

module.exports = mongoose.model("Node", Node);
