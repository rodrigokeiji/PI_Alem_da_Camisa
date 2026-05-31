var camisasModel = require("../models/camisasModel");

// catálogo
function listarCamisas(req, res) {
    camisasModel.listarCamisas()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function curtir(req, res) {

    var idUsuario = req.body.idUsuario;
    var idCamisa = req.body.idCamisa;

    if (!idUsuario || !idCamisa) {
        return res.status(400).send("Dados inválidos!");
    }

    camisasModel.verificarCurtida(idUsuario, idCamisa)
        .then(resultado => {

            if (resultado.length > 0) {
                // já curtiu → descurtir
                return camisasModel.descurtir(idUsuario, idCamisa)
                    .then(() => {
                        res.status(200).json({ status: "descurtido" });
                    });
            }

            // ainda não curtiu → curtir
            return camisasModel.curtir(idUsuario, idCamisa)
                .then(() => {
                    res.status(201).json({ status: "curtido" });
                });

        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


// ranking para gráfico pizza
function ranking(req, res) {
    camisasModel.buscarRankingCurtidas()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarCamisas,
    curtir,
    ranking
};