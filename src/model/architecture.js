const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Architecture = new Schema({
  name: String,
  description: [String],
  images: [String],
});
module.exports = mongoose.model("Architecture", Architecture);
