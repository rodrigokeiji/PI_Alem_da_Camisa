var express = require("express");
var router = express.Router();

var camisasController = require("../controllers/camisasController");

// catálogo
router.get("/", function (req, res) {
    camisasController.listarCamisas(req, res);
});

// curtir camisa
router.post("/curtir", function (req, res) {
    camisasController.curtir(req, res);
});

// ranking gráfico pizza
router.get("/ranking", function (req, res) {
    camisasController.ranking(req, res);
});

module.exports = router;