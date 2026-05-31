var database = require("../database/config");

function buscarCamisasPorUsuario(idUsuario) {

  var instrucaoSql = `
    SELECT * FROM precificador
    WHERE fk_usuario = ${idUsuario}
    ORDER BY data_criacao DESC;
  `;

  console.log("Executando SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nomeCamisa, precoEstimado, idUsuario) {

  var instrucaoSql = `
    INSERT INTO precificador (nome_camisa, preco_estimado, fk_usuario)
    VALUES ('${nomeCamisa}', ${precoEstimado}, ${idUsuario});
  `;

  console.log("Executando SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarCamisasPorUsuario,
  cadastrar
};