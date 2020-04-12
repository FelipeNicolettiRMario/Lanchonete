CREATE DATABASE Lanchonete

create table Lanchonete.LNC_LANCHE(
	LNC_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    LNC_NOME VARCHAR(50) NOT NULL,
    LNC_DESCRICAO VARCHAR(300) NOT NULL,
    LNC_PRECO FLOAT NOT NULL,
    LNC_INGREDIENTES VARCHAR(500)
)

create table Lanchonete.PDO_PEDIDO(
	PDO_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    PDO_CLIENTE VARCHAR(100) NOT NULL,
    PDO_QUANTIDADE INT NOT NULL,
    PDO_OBSERVACOES VARCHAR(500),
    PDO_LANCHE INT,
    FOREIGN KEY (PDO_LANCHE) REFERENCES Lanchonete.LNC_LANCHE(LNC_ID)

)