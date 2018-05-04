-- Create the burgers_db.
CREATE DATABASE burgers_db;
-- Switch to or use the burgers_db.
USE burgers_db;
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
CREATE TABLE burgers (
    id int(5) NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR(20) NOT NULL, 
    devoured BOOLEAN DEFAULT FALSE NOT NULL,
    PRIMARY KEY (id)
)
