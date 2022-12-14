const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Curve = new Schema({
  idFaces: [Schema.Types.ObjectId],
  color: String,
  des: String,
  name: String,
});

module.exports = mongoose.model("Curve", Curve);
