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
        resolve(newRes);
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

  post: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const data = req.body;
        const res = [];
        for (let i = 0; i < data.length; ++i) {
          const node = await Node.create({
            x: data[i].x,
            y: data[i].y,
            z: data[i].z,
          });

          const point = await Point.create({
            type: "point",
            idNode: node._id,
            symbol: {
              type: "web-style",
              name: data[i].symbol.name,
              styleName: data[i].symbol.styleName,
            },
          });
          res.push(point);
        }
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
};
