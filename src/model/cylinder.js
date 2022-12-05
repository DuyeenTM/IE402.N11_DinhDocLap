const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cylinder = new Schema({
  idNode: Schema.Types.ObjectId,
  r: Number,
  h: Number,
  color: String,
  des: String,
});

module.exports = mongoose.model("Cylinder", Cylinder);
