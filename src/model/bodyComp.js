const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BodyComp = new Schema({
  idFaces: [Schema.Types.ObjectId],
  color: [Number],
  des: String,
});

module.exports = mongoose.model("BodyComp", BodyComp);
