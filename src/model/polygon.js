const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const symbolPolygonType = new Schema({
  type: String,
  color: [Number],
  outline: { color: [Number], width: Number },
});

const Polygon = new Schema({
  type: String,
  idNodes: [Schema.Types.ObjectId],
  symbol: symbolPolygonType,
});

module.exports = mongoose.model("Polygon", Polygon);
