CREATE DATABASE alemdacamisa;
USE alemdacamisa;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	senha VARCHAR(50) NOT NULL
);

CREATE TABLE camisa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_camisa VARCHAR(50) NOT NULL,
    imagem VARCHAR(250) NOT NULL,
    descricao VARCHAR(500) NOT NULL,
    preco DECIMAL(11,2) NOT NULL
);


insert into camisa (nome_camisa, imagem, descricao, preco) values 
('AC Milan 2024/2025 - Off-White x Puma', 'assets/imgs/milan.png', 'A camisa Off-White x Puma AC Milan Fourth Jersey Red (2025) une futebol e streetwear 
em um design vermelho com degradê verde na barra e setas da Off-White™ em marca d água. O modelo traz o número 63 na gola, celebrando o título europeu do Milan de 1963 
e o discurso contra o racismo de Martin Luther King.', 1299.99),

('Brasil 1970 - Pelé - Final da Copa', 'assets/imgs/peledestaque.png', 'Usada no tricampeonato de 1970, a clássica camisa número 10 de algodão do Pelé 
foi fabricada pela Athleta com o escudo bordado da CBD. A peça do primeiro tempo, com a qual ele marcou o gol de cabeça na final contra a Itália, está preservada e exposta 
no Museu do Futebol, em São Paulo.', 265200.00),

('Holanda 1988 - Eurocopa', 'assets/imgs/holanda.png', 'A camisa da Holanda de 1988 (Adidas) é um ícone do futebol pelo padrão geométrico laranja em estilo "origami". 
Vestida por Van Basten no título da Euro 1988, ela traz o leão preto da KNVB no peito e é uma das relíquias mais raras e valiosas do mundo.', 9000.00),

('Barcelona 2014/2015 - Trio MSN', 'assets/imgs/barcelona.png', 'A camisa do Barcelona 2014/15 (Nike) é um clássico de listras verticais azul-grenás e gola polo moderna com
as cores da Catalunha. O modelo marcou a estreia do trio MSN (Messi, Suárez e Neymar) e o histórico título da Tríplice Coroa.', 800.00);

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
    nome_camisa VARCHAR(50) NOT NULL,
    preco_estimado DECIMAL(11,2) NOT NULL,
    data_criacao DATE DEFAULT (CURRENT_DATE()) NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

