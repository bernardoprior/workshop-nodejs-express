const express = require("express");
const router = require("express-promise-router")();

//EXISTEM MANEIRAS DE VALIDAR PARAMETROS DOS POST REQUESTS

const pingController = require("../controllers/pingController.js");

router.route("/").get(pingController.getAll);
router.route("/").post(pingController.newPing);

module.exports = router;
