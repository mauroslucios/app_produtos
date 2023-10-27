CREATE TABLE tb_type_client(
id INT,
tipo VARCHAR(20) NOT NULL,
PRIMARY KEY(id),
created_on TIMESTAMP NOT NULL,
update_on TIMESTAMP NOT NULL
);

CREATE TABLE tb_type_telephone(
id INT,
tipo VARCHAR(20) NOT NULL,
PRIMARY KEY(id),
created_on TIMESTAMP NOT NULL,
update_on TIMESTAMP NOT NULL
);

CREATE TABLE tb_type_product(
id INT,
tipo VARCHAR(30) NOT NULL,
PRIMARY KEY(id),
created_on TIMESTAMP NOT NULL,
update_on TIMESTAMP NOT NULL
);

CREATE TABLE tb_type_vehicle(
id INT,
tipo VARCHAR(20),
PRIMARY KEY(id),
created_on TIMESTAMP NOT NULL,
update_on TIMESTAMP NOT NULL
);

CREATE TABLE tb_orderStatus(
id INT,
tipo VARCHAR(10),
PRIMARY KEY(id),
created_on TIMESTAMP NOT NULL,
update_on TIMESTAMP NOT NULL
);

CREATE TABLE tb_deliveryman(
id INT,
name VARCHAR(60)NOT NULL,
cpf VARCHAR(15) NOT NULL,
telephone VARCHAR(15) NOT NULL,
rua VARCHAR(45) NOT NULL,
numero INT NOT NULL,
cidade VARCHAR(30) NOT NULL,
uf CHAR(2) NOT NULL,
cep VARCHAR(9) NOT NULL,
registro DATETIME NOT NULL,
status INT NOT NULL,
type_vehicle_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(type_vehicle_id) REFERENCES tb_type_vehicle(id),
created_on TIMESTAMP NOT NULL,
update_on TIMESTAMP NOT NULL
);


CREATE TABLE tb_client(
id INT,
name VARCHAR(30) NOT NULL,
cpf_cnpj VARCHAR(15) NOT NULL,
email VARCHAR(50) NOT NULL,
telephone VARCHAR(15) NOT NULL,
status INT NOT NULL,
registry DATE NOT NULL,
type_client_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(type_client_id) REFERENCES tb_client(id),
created_on TIMESTAMP NOT NULL,
update_on TIMESTAMP NOT NULL
);

CREATE TABLE tb_product(
id INT ,
name VARCHAR(50) NOT NULL,
price DOUBLE NOT NULL,
description VARCHAR(255) NOT NULL,
imguri VARCHAR(255) NOT NULL,
type_product_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(type_product_id) REFERENCES tb_type_product(id),
created_on TIMESTAMP NOT NULL,
update_on TIMESTAMP NOT NULL
);

CREATE TABLE tb_order(
id INT,
client_id INT NOT NULL,
deliveryman_id INT NOT NULL,
latitude DOUBLE NOT NULL,
longitude DOUBLE NOT NULL,
order_status INT NOT NULL,
moment DATETIME NOT NULL,
total DOUBLE NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(order_status) REFERENCES tb_orderStatus(id),
FOREIGN KEY(client_id) REFERENCES tb_client(id),
FOREIGN KEY(deliveryman_id) REFERENCES tb_deliveryman(id),
created_on TIMESTAMP NOT NULL,
update_on TIMESTAMP NOT NULL
);

ALTER TABLE tb_deliveryman CHANGE COLUMN registro registration_date DATETIME;
DESC tb_deliveryman;

select * from postagens;



