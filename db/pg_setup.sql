-- Create the burgers_db.
CREATE DATABASE burgers_db;
-- Switch to or use the burgers_db.
USE burgers_db;
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
CREATE TABLE burgers (
    id SERIAL PRIMARY KEY, 
    burger_name VARCHAR(20) NOT NULL, 
    devoured BOOLEAN DEFAULT FALSE NOT NULL
);

INSERT INTO burgers (burger_name) VALUES ("Western Bacon");
INSERT INTO burgers (burger_name) VALUES ('Texas Burger');
INSERT INTO burgers (burger_name) VALUES ('Royale with Cheese');
INSERT INTO burgers (burger_name) VALUES ('Kraken');