-- Crear la base de datos "parapentes"
CREATE DATABASE parapentes;

-- Seleccionar la base de datos
USE parapentes;

-- Crear la tabla "usuarios"
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

-- Insertar datos de prueba en la tabla "usuarios"
INSERT INTO usuarios (username, password_hash)
VALUES
    ('usuario1', 'hash_contraseña_1'),
    ('usuario2', 'hash_contraseña_2'),
    ('usuario3', 'hash_contraseña_3');
