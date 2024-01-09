DROP DATABASE IF EXISTS pokemon;
CREATE DATABASE pokemon;
USE pokemon;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);


CREATE TABLE pokemons (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    type ENUM('normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dark', 'steel', 'fairy'),
    subtype ENUM('physical', 'special', 'status'),
    region ENUM('Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar')
);


INSERT INTO pokemons (id, name, type, subtype, region) VALUES
    (1, 'Bulbasaur', 'grass', 'physical', 'Kanto'),
    (2, 'Charmander', 'fire', 'special', 'Kanto'),
    (3, 'Squirtle', 'water', 'physical', 'Kanto'),
    (4, 'Pikachu', 'electric', 'special', 'Kanto'),
    (5, 'Eevee', 'normal', 'physical', 'Kanto');
