const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Feedback = new Schema({
  fullname: String,
  email: String,
  title: String,
  content: String,
});

module.exports = mongoose.model("Feedback", Feedback);
