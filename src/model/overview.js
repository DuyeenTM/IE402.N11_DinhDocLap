const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Overview = new Schema({
  name: String,
  description: [String],
  images: [String],
});
module.exports = mongoose.model("Overview", Overview);
