var database = require("../database/config");

// listar camisas (catálogo)
function listarCamisas() {
    var sql = `SELECT * FROM camisa`;
    return database.executar(sql);
}

// inserir curtida
function curtir(idUsuario, idCamisa) {
    var sql = `
        INSERT INTO curtida (fk_usuario, fk_camisa)
        VALUES (${idUsuario}, ${idCamisa});
    `;
    return database.executar(sql);
}

// dados do gráfico (pizza)
function buscarRankingCurtidas() {
    var sql = `
        SELECT 
            c.nome_camisa,
            COUNT(cur.id) AS totalCurtidas
        FROM camisa c
        LEFT JOIN curtida cur 
            ON c.id = cur.fk_camisa
        GROUP BY c.id, c.nome_camisa
        ORDER BY totalCurtidas DESC;
    `;
    return database.executar(sql);
}

function verificarCurtida(idUsuario, idCamisa) {
    var sql = `
        SELECT * FROM curtida
        WHERE fk_usuario = ${idUsuario}
        AND fk_camisa = ${idCamisa};
    `;
    return database.executar(sql);
}

function descurtir(idUsuario, idCamisa) {
    var sql = `
        DELETE FROM curtida
        WHERE fk_usuario = ${idUsuario}
        AND fk_camisa = ${idCamisa};
    `;
    return database.executar(sql);
}


module.exports = {
    listarCamisas,
    curtir,
    buscarRankingCurtidas,
    verificarCurtida,
    descurtir
};