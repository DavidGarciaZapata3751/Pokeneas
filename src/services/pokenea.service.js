const pokeneas = require("../data/pokeneas");
const os = require("os");

class PokeneaService {
  getRandomPokenea() {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    const pokenea = pokeneas[randomIndex];
    const containerId = os.hostname();

    return { pokenea, containerId };
  }
}

module.exports = new PokeneaService();
