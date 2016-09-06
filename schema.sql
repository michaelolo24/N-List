-- ---
-- Globals
-- ---
DROP DATABASE IF EXISTS `rezzy`; --Drop statement for database to have clean working DB from start

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
  `photo_path` VARCHAR DEFAULT NULL,
  `bookmarked` INTEGER UNSIGNED DEFAULT NULL,
  `languages` INTEGER UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'creators'
--
-- ---

DROP TABLE IF EXISTS `creators`;

CREATE TABLE `creators` (
  `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'resources'
--
-- ---

DROP TABLE IF EXISTS `resources`;

CREATE TABLE `resources` (
  `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_creators` INTEGER UNSIGNED NOT NULL,
  `id_languages` INTEGER UNSIGNED NOT NULL,
  `id_sub_topics` INTEGER UNSIGNED DEFAULT NULL,
  `id_resource_type` INTEGER UNSIGNED NOT NULL,
  `link` VARCHAR(2000) NOT NULL,
  `keywords` VARCHAR(255) DEFAULT NULL,
  `likes` INTEGER UNSIGNED DEFAULT NULL,
  `dislikes` INTEGER UNSIGNED DEFAULT NULL,
  `date_added` TIMESTAMP NOT NULL,
  `date_created` TIMESTAMP DEFAULT NULL,
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

-- ---
-- Table 'sub_topics'
--
-- ---

DROP TABLE IF EXISTS `sub_topics`;

CREATE TABLE `sub_topics` (
  `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_languages` INTEGER UNSIGNED NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `resources` ADD FOREIGN KEY (id_creators) REFERENCES `creators` (`id`);
ALTER TABLE `resources` ADD FOREIGN KEY (id_languages) REFERENCES `languages` (`id`);
ALTER TABLE `resources` ADD FOREIGN KEY (id_sub_topics) REFERENCES `sub_topics` (`id`);
ALTER TABLE `resources` ADD FOREIGN KEY (id_resource_type) REFERENCES `resource_type` (`id`);
ALTER TABLE `sub_topics` ADD FOREIGN KEY (id_languages) REFERENCES `languages` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `creators` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `resources` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `languages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `resource_type` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `sub_topics` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data --use the below templates to insert template data from the get go
-- ---

-- INSERT INTO `users` (`id`,`name`,`email`,`password`,`photo_path`,`bookmarked`,`languages`) VALUES
-- ('','','','','','','');

-- INSERT INTO `creators` (`id`,`name`) VALUES
-- ('','');

-- Create Null catch all for links that have no creators
INSERT INTO `creators` (`name`) VALUES
('NULL');

-- INSERT INTO `resources` (`id`,`id_creators`,`id_sub_topics`,`id_resource_type`,`link`,`keywords`,`likes`,`dislikes`,`date_added`,`date_created`) VALUES
-- ('','','','','','','','','','');

-- Languages Test Data
-- INSERT INTO `languages` (`id`,`name`) VALUES
-- ('','');
  INSERT INTO `languages` (`name`) VALUES
  ('Javascript'); --this will create an id_languages of 1 via auto_increment for the sub_topics below

-- Resource Type Test Data
-- INSERT INTO `resource_type` (`type`) VALUES
-- ('Forum'), ('Article'), ('Video');

INSERT INTO `resource_type` (`type`) VALUES
('Forum'), ('Article'), ('Video');

-- INSERT INTO `sub_topics` (`id`,`id_languages`,`name`) VALUES
-- ('','','');

INSERT INTO `sub_topics` (`id_languages`,`name`) VALUES
(1,'React'),
(1,'Angular'),
(1,'D3'),
(1,'Backbone'),
(1,'Node'),
(1,'Express'),
(1,'Rest API'),
(1,'Meteor'),
(1,'Databases'),
(1,'Ember'),
(1,'ES6');