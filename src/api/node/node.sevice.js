const Node = require("../../model/node");
module.exports = {
  getNodes: function () {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Node.find();
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },

  getNode: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Node.findOne({ _id: req.query.id });
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },

  postNode: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const data = req.body;
        const res = await Node.create({
          x: data.x,
          y: data.y,
          z: data.z,
        });
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
};
