/*Script Banco de Dados 
Além da Camisa*/

CREATE DATABASE alemdacamisa;
USE alemdacamisa;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE camisa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_camisa VARCHAR(50),
    descricao VARCHAR(200),
    preco DECIMAL(11,2)
);

CREATE TABLE curtida (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    fk_camisa INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_camisa) REFERENCES camisa(id)
);

CREATE TABLE precificador (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    nome_camisa VARCHAR(50),
    preco_estimado DECIMAL(11,2),
    data_criacao DATE DEFAULT (CURRENT_DATE()),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);



