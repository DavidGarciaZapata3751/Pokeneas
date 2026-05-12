const pokeneaService = require("../services/pokenea.service");

const getPokeneaVisual = (req, res) => {
  const { pokenea, containerId } = pokeneaService.getRandomPokenea();

  res.render("visual", { pokenea, containerId });
};

module.exports = { getPokeneaVisual };

