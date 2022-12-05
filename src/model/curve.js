const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Curve = new Schema({
  idFaces: [Schema.Types.ObjectId],
  color: [Number],
  des: String,
});

module.exports = mongoose.model("Curve", Curve);
