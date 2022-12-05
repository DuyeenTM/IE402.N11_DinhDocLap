const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Prism = new Schema({
  idFace: Schema.Types.ObjectId,
  h: Number,
  color: String,
  des: String,
});

module.exports = mongoose.model("Prism", Prism);
