const pokeneaService = require("../services/pokenea.service");

const getPokeneaInfo = (req, res) => {
  const { pokenea, containerId } = pokeneaService.getRandomPokenea();

  res.json({
    containerId,
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
  });
};

module.exports = { getPokeneaInfo };

