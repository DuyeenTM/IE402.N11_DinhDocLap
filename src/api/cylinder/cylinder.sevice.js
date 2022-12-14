const Node = require("../../model/node");
const Cylinder = require("../../model/cylinder");

module.exports = {
  getCylinders: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Cylinder.find({
          name: req.query.name,
        });
        if (res.length === 0) resolve(res);
        const newRes = [];
        for (let i = 0; i < res.length; ++i) {
          const n = await Node.findOne({ _id: res[i].idNode });
          newRes.push({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [n.x, n.y, n.z],
            },
            id: res[i].idNode,
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
          radius: data.r,
          height: data.h,
          name: data.name,
          color: data.color,
          des: data.res,
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
          const nodeArr = data[i].geometry.coordinates;
          let id;
          const node = await Node.findOne({
            x: nodeArr[0],
            y: nodeArr[1],
            z: nodeArr[2],
          });
          if (node === null) {
            const node1 = await Node.create({
              x: nodeArr[0],
              y: nodeArr[1],
              z: nodeArr[2],
            });
            id = node1._id;
          } else id = node._id;
          const cylinder = await Cylinder.create({
            idNode: id,
            radius: req.body.r,
            height: req.body.h,
            name: req.body.name,
            color: req.body.color,
            des: req.body.generator,
          });
          res.push(cylinder);
        }
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
};
