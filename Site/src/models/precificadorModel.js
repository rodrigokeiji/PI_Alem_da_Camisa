var database = require("../database/config");

function cadastrar(nomeCamisa, precoEstimado, idUsuario) {

    var instrucaoSql = `
        INSERT INTO precificador (nome_camisa, preco_estimado, fk_usuario)
        VALUES ('${nomeCamisa}', ${precoEstimado}, ${idUsuario});
    `;

    return database.executar(instrucaoSql);
}

function buscarCamisasPorUsuario(idUsuario) {

    var instrucaoSql = `
        SELECT * FROM precificador
        WHERE fk_usuario = ${idUsuario}
        ORDER BY data_criacao DESC;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarCamisasPorUsuario
};