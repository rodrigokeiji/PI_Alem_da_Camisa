var express = require("express");
var router = express.Router();

var precificadorController = require("../controllers/precificadorController");

router.post("/cadastrar", function (req, res) {
    precificadorController.cadastrar(req, res);
});

router.get("/:idUsuario", function (req, res) {
    precificadorController.buscarCamisasPorUsuario(req, res);
});

module.exports = router;