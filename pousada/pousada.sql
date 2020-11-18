create database pousada;

use pousada;

CREATE TABLE IF NOT EXISTS quartos ( id int AUTO_INCREMENT PRIMARY KEY, numero_porta VARCHAR(10) NOT NULL, tipo_quarto VARCHAR(10) NOT NULL, valor DOUBLE NOT NULL, status VARCHAR(10) NOT NULL );

CREATE TABLE IF NOT EXISTS clientes ( id int AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255) NOT NULL, documento VARCHAR(25) NOT NULL, data_nascimento DATE NOT NULL, cidade VARCHAR(100) NOT NULL, estado VARCHAR(2) NOT NULL );

CREATE TABLE IF NOT EXISTS reservas ( id int AUTO_INCREMENT PRIMARY KEY, 
                                     id_quarto int NOT NULL, id_cliente int NOT NULL, data_entrada DATE NOT NULL, data_saida DATE NOT NULL, valor_reserva DOUBLE NOT NULL, status VARCHAR(10) NOT NULL, data_hora DATETIME NOT NULL, FOREIGN KEY (id_quarto) REFERENCES quarto(id), FOREIGN KEY (id_cliente) REFERENCES cliente(id));

INSERT INTO `quartos`(`numero_porta`, `tipo_quarto`, `valor`, `status`) VALUES ('13-A','simples',130, 'livre');
INSERT INTO `quartos`(`numero_porta`, `tipo_quarto`, `valor`, `status`) VALUES ('16-B','duplo',260, 'bloqueado');
INSERT INTO `quartos`(`numero_porta`, `tipo_quarto`, `valor`, `status`) VALUES ('14-C','triplo',390, 'livre');

INSERT INTO `clientes`(`nome`, `documento`, `data_nascimento`, `cidade`, `estado`) VALUES ('Jose Silva','14356234','1980-01-01','Pouso Alegre','MG');

INSERT INTO `reservas`(`id_quarto`, `id_cliente`, `data_entrada`, `data_saida`, `valor_reserva`, `status`, `data_hora`) VALUES (1, 1, '2020-01-01', '2020-01-03', 390, 'reservado', now());