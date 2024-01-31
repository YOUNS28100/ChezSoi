CREATE TABLE `agency` (
  id INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `coordinates` POINT NULL,
  `city` VARCHAR(100) NOT NULL,
  `country` VARCHAR(100) NOT NULL,
  `contact_number` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `user` (
  id INT NOT NULL AUTO_INCREMENT,
  `lastname` VARCHAR(100) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `contact_number` VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `commercial` (
  id INT NOT NULL AUTO_INCREMENT,
  `lastname` VARCHAR(100) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(200) UNIQUE NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `avatar` VARCHAR(255) NOT NULL,
  `agency_id` INT NOT NULL,
  `contact_number` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `commercial_agency_fk` FOREIGN KEY (`agency_id`) REFERENCES `agency`(`id`)
);

CREATE TABLE `offer` (
  id INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` text NOT NULL,
  `size` INT UNSIGNED NOT NULL,
  `coordinates` POINT NULL,
  `city` VARCHAR(200) NOT NULL,
  `country` VARCHAR(100) NOT NULL,
  `type` VARCHAR(4) NOT NULL,
  `creation_date` DATETIME NOT NULL DEFAULT NOW(),
  `price` INT UNSIGNED NOT NULL,
  `commercial_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `offer_commercial_fk` FOREIGN KEY (`commercial_id`) REFERENCES `commercial`(`id`)
);