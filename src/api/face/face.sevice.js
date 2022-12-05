const Node = require("../../model/node");
const Face = require("../../model/face");

module.exports = {
  getFaces: function () {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Face.find();
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },

  getFace: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Face.findOne({ _id: req.query.id });
        const newRes = [];
        for (let i = 0; i < res.idNodes.length; ++i) {
          const n = await Node.findOne({ _id: res.idNodes[i]._id });
          newRes.push([n.x, n.y, n.z]);
        }
        resolve(newRes);
      } catch (error) {
        reject(error);
      }
    });
  },

  postFace: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const data = req.body;
        const res = await Face.create({
          idNodes: data.idNodes,
        });
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
};
