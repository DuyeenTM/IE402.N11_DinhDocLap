const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Line = new Schema({
  type: String,
  idNodes: [Schema.Types.ObjectId],
  color: String,
  width: Number,
  height: Number,
  des: String,
  name: String,
});

module.exports = mongoose.model("Line", Line);
