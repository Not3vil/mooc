DROP TABLE IF EXISTS `inventory list`;
DROP TABLE IF EXISTS `job list`;
DROP TABLE IF EXISTS `item list`;


CREATE TABLE `inventory list` (
`UUID` TINYTEXT PRIMARY KEY NOT NULL UNIQUE,
`item ref id` TINYTEXT NOT NULL UNIQUE,
`weight` INT,
`units` INT,
`Reciving time` DATETIME NOT NULL,
`position` INT NOT NULL);

CREATE TABLE `job list` (
`UUID` TINYTEXT PRIMARY KEY NOT NULL UNIQUE,
`old position` TINYTEXT NOT NULL UNIQUE,
`new position` TINYTEXT NOT NULL UNIQUE,
`priority` ENUM ("high","med","low") DEFAULT '"low"' NOT NULL,
`time of moving` TIMESTAMP NOT NULL,
`in transit` BOOLEAN NOT NULL,
`time of deposit` TIMESTAMP NOT NULL);

CREATE TABLE `item list` (
`Item Ref Id` TINYTEXT PRIMARY KEY NOT NULL UNIQUE,
`profit margins` INT NOT NULL,
`month of activity` INT NOT NULL,
`used in weekends` INT NOT NULL,
`holiday season` INT NOT NULL,
`space to cost factir` INT NOT NULL);

