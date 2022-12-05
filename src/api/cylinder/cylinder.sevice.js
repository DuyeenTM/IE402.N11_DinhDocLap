const Node = require("../../model/node");
const Cylinder = require("../../model/cylinder");

module.exports = {
  getCylinders: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Cylinder.find({
          r: req.query.r,
          h: req.query.h,
        });
        const newRes = [];
        for (let i = 0; i < res.length; ++i) {
          const n = await Node.findOne({ _id: res[0].idNode });
          newRes.push({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [n.x, n.y, n.z],
            },
            id: res[0].idNode,
          });
        }
        resolve({
          type: "FeatureCollection",
          generator: res[0].des,
          copyright: res[0].des,
          timestamp: "2022-12-2",
          features: newRes,
        });
      } catch (error) {
        reject(error);
      }
    });
  },

  postCylinder: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const data = req.body;
        const res = await Cylinder.create({
          idNode: data.idNode,
          r: data.r,
          h: data.h,
          color: data.color,
          des: data.res,
        });
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
};
