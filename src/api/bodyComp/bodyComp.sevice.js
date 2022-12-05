const Node = require("../../model/node");
const Face = require("../../model/face");
const BodyComp = require("../../model/bodyComp");

module.exports = {
  getBodyComps: function () {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Curve.find();
        const newRes = [];
        for (let i = 0; i < res.length; ++i) {
          const faces = res[i].idFaces;
          for (let j = 0; j < faces.length; ++j) {
            const arrFace = [];
            const f = await Face.findOne({ _id: faces[j]._id });
            const nodeArr = f.idNodes;
            for (let k = 0; k < nodeArr.length; ++k) {
              const n = await Node.findOne({ _id: nodeArr[k]._id });
              arrFace.push([n.x, n.y, n.z]);
            }
            newRes.push({
              type: "polygon",
              rings: arrFace,
              symbol: {
                type: "simple-fill",
                color: res[0].color,
                outline: { color: res.color, width: 1 },
              },
            });
          }
        }
        resolve(newRes);
      } catch (error) {
        reject(error);
      }
    });
  },

  postBodyComp: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const data = req.body;
        const res = await BodyComp.create({
          idFaces: data.idFaces,
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
