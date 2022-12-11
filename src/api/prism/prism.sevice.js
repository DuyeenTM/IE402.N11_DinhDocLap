const Node = require("../../model/node");
const Face = require("../../model/face");
const Prism = require("../../model/prism");

module.exports = {
  getPrisms: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Prism.find({
          color: req.query.color,
          height: req.query.h,
        });
        if (res.length === 0) resolve(res);
        const newRes = [];
        for (let i = 0; i < res.length; ++i) {
          const nodeArr = [];
          const face = await Face.findOne({ _id: res[i].idFace });
          for (let j = 0; j < face.idNodes.length; j++) {
            const n = await Node.findOne({ _id: face.idNodes[j]._id });
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
          height: data.h,
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
        const res = [];
        const data = req.body.features;
        for (let i = 0; i < data.length; ++i) {
          const nodeArr = data[i].geometry.coordinates[0];
          const idNodes = [];
          for (let j = 0; j < nodeArr.length; ++j) {
            const node = await Node.create({
              x: nodeArr[j][0],
              y: nodeArr[j][1],
              z: nodeArr[j][2],
            });
            idNodes.push(node._id);
          }
          const face = await Face.create({
            idNodes: idNodes,
          });
          const prism = await Prism.create({
            idFace: face._id,
            height: req.body.h,
            color: req.body.color,
            des: req.body.generator,
          });
          res.push(prism);
        }
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
};
