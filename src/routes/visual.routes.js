const { Router } = require("express");
const { getPokeneaVisual } = require("../controllers/visual.controller");

const router = Router();
router.get("/visual", getPokeneaVisual);

module.exports = router;
