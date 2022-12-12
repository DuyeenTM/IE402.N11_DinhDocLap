const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Info = new Schema({
  title: String,
  summary: String,
  desc: String,
});

module.exports = mongoose.model("Info", Info);
