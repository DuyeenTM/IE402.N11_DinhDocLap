const Node = require("../../model/node");
const Polygon = require("../../model/polygon");

module.exports = {
  getPolygons: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Polygon.find({
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
            rings: nodeArr,
            symbol: res[i].symbol,
          });
        }
        resolve(newRes);
      } catch (error) {
        reject(error);
      }
    });
  },

  postPolygon: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const data = req.body;
        const res = await Polygon.create({
          type: "polygon",
          type: data.name,
          idNodes: data.idNodes,
          symbol: {
            type: "simple-fill",
            color: data.color,
            outline: { color: data.color, width: 1 },
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
          const nodeArr = data[i].rings;
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
          const polygon = await Polygon.create({
            type: "polygon",
            name: data[i].name,
            idNodes: idNodes,
            symbol: {
              type: "simple-fill",
              color: data[i].symbol.color,
              outline: { color: data[i].symbol.color, width: 1 },
            },
          });
          res.push(polygon);
        }
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
};
