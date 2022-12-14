const Node = require("../../model/node");
const Line = require("../../model/line");

module.exports = {
  getPolyline: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Line.find({
          name: req.query.name,
        });
        const newRes = [];
        for (let i = 0; i < res.length; ++i) {
          const nodeArr = [];
          for (let j = 0; j < res[i].idNodes.length; j++) {
            const n = await Node.findOne({ _id: res[i].idNodes[j] });
            nodeArr.push([n.x, n.y, n.z]);
          }
          newRes.push({
            type: res[i].type,
            paths: nodeArr,
            symbol: {
              type: "simple-line",
              color: res[i].color,
              width: res[i].width,
            },
          });
        }
        resolve(newRes);
      } catch (error) {
        reject(error);
      }
    });
  },

  getLine: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Line.find({
          name: req.query.name,
        });
        if (res.length === 0) resolve(res);
        const newRes = [];
        for (let i = 0; i < res.length; ++i) {
          const nodeArr = [];
          for (let j = 0; j < res[i].idNodes.length; j++) {
            const n = await Node.findOne({ _id: res[i].idNodes[j] });
            nodeArr.push([n.x, n.y, n.z]);
          }
          newRes.push({
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: nodeArr,
            },
            id: res[i]._id,
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

  postLine: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const data = req.body;
        const res = await Line.create({
          type: data.type,
          idNodes: data.idNodes,
          color: data.color,
          height: data.h,
          name: data.name,
          width: data.w,
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
          const idNodes = [];
          for (let j = 0; j < nodeArr.length; ++j) {
            const node = await Node.findOne({
              x: nodeArr[j][0],
              y: nodeArr[j][1],
              z: nodeArr[j][2],
            });
            if (node === null) {
              const node1 = await Node.create({
                x: nodeArr[j][0],
                y: nodeArr[j][1],
                z: nodeArr[j][2],
              });
              idNodes.push(node1._id);
            } else idNodes.push(node._id);
          }
          const line = await Line.create({
            type: "LineString",
            idNodes: idNodes,
            height: req.body.h,
            width: req.body.w,
            color: req.body.color,
            name: req.body.name,
            des: req.body.generator,
          });
          res.push(line);
        }
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },

  postPolyline: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const data = req.body;
        const res = [];
        for (let i = 0; i < data.length; ++i) {
          const nodeArr = data[i].paths;
          const idNodes = [];
          for (let j = 0; j < nodeArr.length; ++j) {
            const node = await Node.create({
              x: nodeArr[j][0],
              y: nodeArr[j][1],
              z: nodeArr[j][2],
            });
            idNodes.push(node._id);
          }
          const line = await Line.create({
            type: "polyline",
            idNodes: idNodes,
            color: data[i].symbol.color,
            name: data[i].name,
            height: 0,
            width: 0,
          });
          res.push(line);
        }
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
};
