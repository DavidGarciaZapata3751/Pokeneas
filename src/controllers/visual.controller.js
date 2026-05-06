const pokeneas = require("../data/pokeneas");
const os = require("os");

const getPokeneaVisual = (req, res) => {
  const randomIndex = Math.floor(Math.random() * pokeneas.length);
  const pokenea = pokeneas[randomIndex];
  const containerId = os.hostname();

  res.render("visual", { pokenea, containerId });
};

module.exports = { getPokeneaVisual };
