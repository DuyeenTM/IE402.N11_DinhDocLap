const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const symbolPointType = new Schema({
  type: String,
  name: String,
  styleName: String,
});

const Point = new Schema({
  type: String,
  idNode: Schema.Types.ObjectId,
  symbol: symbolPointType,
});

module.exports = mongoose.model("Point", Point);
