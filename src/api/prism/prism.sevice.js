const Node = require("../../model/node");
const Face = require("../../model/face");
const Prism = require("../../model/prism");

module.exports = {
  getPrisms: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Prism.find({
          color: "#" + req.query.color,
          h: req.query.h,
        });
        const newRes = [];
        for (let i = 0; i < res.length; ++i) {
          const nodeArr = [];
          const face = await Face.findOne({ _id: res[i].idFace });
          for (let j = 0; j < face.idNodes.length; j++) {
            const n = await Node.findOne({ _id: face.idNodes[0]._id });
            nodeArr.push([n.x, n.y, n.z]);
          }
          newRes.push({
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [nodeArr],
            },
            id: face._id,
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

  postPrism: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const data = req.body;
        const res = await Prism.create({
          idFace: data.idFace,
          h: data.h,
          color: data.color,
          des: data.des,
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

        const res = await Prism.create({
          idFace: data.idFace,
          h: data.h,
          color: data.color,
          des: data.des,
        });
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
};
