const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Obj = new Schema({
  name: String,
  description: [String],
  images: [String],
});

const Info = new Schema({
  overview: Obj,
  architecture: Obj,
  floor: [Obj],
  site: [Obj],
});

module.exports = mongoose.model("Info", Info);
