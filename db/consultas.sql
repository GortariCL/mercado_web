CREATE DATABASE carrito;

CREATE TABLE productos(
    id SERIAL,
    nombre VARCHAR(50) NOT NULL,
    imagen VARCHAR(100) NOT NULL
);

INSERT INTO productos (nombre, imagen) 
VALUES ('banana', 'banana.png'),
       ('cebollas', 'cebollas.png'),
       ('lechuga', 'lechuga.png'),
       ('papas', 'papas.png'),
       ('pimenton', 'pimenton.png'),
       ('tomate', 'tomate.png');