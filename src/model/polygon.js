const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const symbolPolygonType = new Schema({
  type: String,
  color: String,
  outline: { color: String, width: Number },
});

const Polygon = new Schema({
  type: String,
  name: String,
  idNodes: [Schema.Types.ObjectId],
  symbol: symbolPolygonType,
});

module.exports = mongoose.model("Polygon", Polygon);
