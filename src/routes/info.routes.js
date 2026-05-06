const { Router } = require("express");
const { getPokeneaInfo } = require("../controllers/info.controller");
const router = Router();

router.get("/pokenea", getPokeneaInfo);

module.exports = router;
