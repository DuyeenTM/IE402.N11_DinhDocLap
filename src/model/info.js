// const Schema = mongoose.Schema;

// const Info = new Schema({
//   overview: Obj,
//   architecture: Obj,
//   floor: [Obj],
//   site: [Obj],
// });
const Architecture = require("./architecture");
const Floor = require("./floor");
const Overview = require("./overview");
const Site = require("./site");

module.exports = {
  Architecture,
  Floor,
  Overview,
  Site,
};
