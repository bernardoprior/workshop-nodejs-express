const express = require("express");
const router = require("express-promise-router")();

//EXISTEM MANEIRAS DE VALIDAR PARAMETROS DOS POST REQUESTS

const jeKersController = require("../controllers/jeKersController.js");

router.route("/").get(jeKersController.getAll);
router.route("/").post(jeKersController.createJeKer);

module.exports = router;
