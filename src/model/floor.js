const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Floor = new Schema({
  name: String,
  description: [String],
  images: [String],
});
module.exports = mongoose.model("Floor", Floor);
