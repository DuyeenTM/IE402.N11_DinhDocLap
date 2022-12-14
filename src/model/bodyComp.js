const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BodyComp = new Schema({
  idFaces: [Schema.Types.ObjectId],
  color: String,
  des: String,
  name: String,
});

module.exports = mongoose.model("BodyComp", BodyComp);
