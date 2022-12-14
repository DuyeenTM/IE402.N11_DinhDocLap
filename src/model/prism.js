const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Prism = new Schema({
  idFace: Schema.Types.ObjectId,
  height: Number,
  name: String,
  color: String,
  des: String,
});

module.exports = mongoose.model("Prism", Prism);
