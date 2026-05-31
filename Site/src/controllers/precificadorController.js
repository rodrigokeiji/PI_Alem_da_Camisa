var precificadorModel = require("../models/precificadorModel");

function cadastrar(req, res) {
    var nomeCamisa = req.body.nomeCamisa;
    var precoEstimado = req.body.precoEstimado;
    var idUsuario = req.body.idUsuario;

    if (nomeCamisa == undefined) {
        res.status(400).send("nomeCamisa está undefined");
    } else if (precoEstimado == undefined) {
        res.status(400).send("precoEstimado está undefined");
    } else if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined");
    } else {

        precificadorModel.cadastrar(nomeCamisa, precoEstimado, idUsuario)
            .then(resultado => {
                res.status(200).json(resultado);
            })
            .catch(erro => {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarCamisasPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    precificadorModel.buscarCamisasPorUsuario(idUsuario)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([]);
            }
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    buscarCamisasPorUsuario
};