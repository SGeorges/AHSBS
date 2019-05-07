### Schema

CREATE DATABASE ahsbs_db;
USE ahsbs_db;

CREATE TABLE 2008_roster
(
	id INT NOT NULL AUTO_INCREMENT,
    player_number INT NOT NULL,
    player_name VARCHAR(80) NOT NULL,
    player_position VARCHAR(10) NOT NULL,
    player_year VARCHAR(10) NOT NULL,
    player_height VARCHAR(10) NOT NULL,
    player_weight INT(10) NOT NULL,
    player_hometown VARCHAR(80) NOT NULL,
	PRIMARY KEY (id)
);
