const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Site = new Schema({
  name: String,
  description: [String],
  images: [String],
});
module.exports = mongoose.model("Site", Site);
