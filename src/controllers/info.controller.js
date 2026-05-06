const pokeneas = require("../data/pokeneas");
const os = require("os");

const getPokeneaInfo = (req, res) => {
  const randomIndex = Math.floor(Math.random() * pokeneas.length);
  const pokenea = pokeneas[randomIndex];

  res.json({
    containerId: os.hostname(),
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
  });
};

module.exports = { getPokeneaInfo };
