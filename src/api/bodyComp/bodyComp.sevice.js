const Node = require("../../model/node");
const Face = require("../../model/face");
const BodyComp = require("../../model/bodyComp");

module.exports = {
  getBodyComps: function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await BodyComp.find({
          name: req.query.name,
        });
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
                color: res[i].color,
                outline: { color: res[i].color, width: 1 },
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
          name: data.name,
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
        const idFaces = [];
        const res = {
          color: data[0].symbol.color,
          name: data[0].name,
        };
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
          const face = await Face.create({
            idNodes: idNodes,
          });
          idFaces.push(face._id);
        }
        res.idFaces = idFaces;
        const bodyComp = await BodyComp.create(res);
        resolve(bodyComp);
      } catch (error) {
        reject(error);
      }
    });
  },
};
