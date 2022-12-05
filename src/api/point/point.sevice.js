const Node = require("../../model/node");
const Point = require("../../model/point");

module.exports = {
  getPoints: function () {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Point.find();
        const newRes = [];
        for (let i = 0; i < res.length; ++i) {
          const n = await Node.findOne({ _id: res[i].idNode });
          newRes.push({
            type: res[i].type,
            x: n.x,
            y: n.y,
            z: n.z,
            symbol: res[i].symbol,
          });
        }
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },

  postPoint: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const data = req.body;
        const res = await Point.create({
          type: "point",
          idNode: data.idNode,
          symbol: {
            type: "web-style",
            name: data.name,
            styleName: data.styleName,
          },
        });
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
};
