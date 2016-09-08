-- ---
-- Globals
-- ---
DROP DATABASE IF EXISTS `rezzy`;

CREATE DATABASE `rezzy`;

USE rezzy;

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(55) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `photo_path` VARCHAR(500) DEFAULT NULL,
  `bookmarked` INTEGER UNSIGNED DEFAULT NULL,
  `languages` INTEGER UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'resources'
--
-- ---

DROP TABLE IF EXISTS `resources`;

CREATE TABLE `resources` (
  `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_languages` INTEGER UNSIGNED NOT NULL,
  `id_sub_topic` INTEGER UNSIGNED DEFAULT NULL,
  `id_resource_type` INTEGER UNSIGNED NOT NULL,
  `link` VARCHAR(2000) NOT NULL,
  `keywords` VARCHAR(255) DEFAULT NULL,
  `likes` INTEGER UNSIGNED DEFAULT 0,
  `dislikes` INTEGER UNSIGNED DEFAULT 0,
  `date_added` TIMESTAMP NOT NULL,
  `date_updated` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'languages'
--
-- ---

DROP TABLE IF EXISTS `languages`;

CREATE TABLE `languages` (
  `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'resource_type'
--
-- ---

DROP TABLE IF EXISTS `resource_type`;

CREATE TABLE `resource_type` (
  `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `sub_topic`;

CREATE TABLE `sub_topic` (
  `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  `topic` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`id`)
);
-- ---
-- Foreign Keys
-- ---

ALTER TABLE `resources` ADD FOREIGN KEY (id_languages) REFERENCES `languages` (`id`);
ALTER TABLE `resources` ADD FOREIGN KEY (id_resource_type) REFERENCES `resource_type` (`id`);
ALTER TABLE `resources` ADD FOREIGN KEY (id_sub_topic) REFERENCES `sub_topic` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `resources` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `languages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `resource_type` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data --use the below templates to insert template data from the get go
-- ---

-- INSERT INTO `users` (`id`,`name`,`email`,`password`,`photo_path`,`bookmarked`,`languages`) VALUES
-- ('','','','','','','');

-- INSERT INTO `resources` (`id_sub_topic`,`id_languages`,`id_resource_type`,`link`,`keywords`,`likes`,`dislikes`,`date_added`) VALUES
-- (1, 2, 2,'http://google.com','Testing Testing', 1,0 ,NOW());


-- Languages Test Data
-- INSERT INTO `languages` (`id`,`name`) VALUES
-- ('','');
  INSERT INTO `languages` (`name`) VALUES
  ('Javascript'), ('C++'), ('Java'), ('C#'), ('Python'), ('Ruby/Rails');

-- this will create an id_languages of 1 via auto_increment for the sub_topics below



-- Resource Type Test Data
-- INSERT INTO `resource_type` (`type`) VALUES
-- ('Forum'), ('Article'), ('Video');

INSERT INTO `resource_type` (`type`) VALUES
('Forum'), ('Article'), ('Video');


INSERT INTO `sub_topic` (`topic`) VALUES
('Front-End'), ('REST APIs'), ('Database'), ('Back-End');


