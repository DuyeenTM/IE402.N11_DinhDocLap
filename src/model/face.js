const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Face = new Schema({
  idNodes: [Schema.Types.ObjectId],
});

module.exports = mongoose.model("Face", Face);
