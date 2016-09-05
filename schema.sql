-- ---
-- Globals
-- ---
CREATE DATABASE rezzy;

USE rezzy;

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(55) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `bookmarked` INTEGER DEFAULT NULL,
  `languages` INTEGER DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'creators'
--
-- ---

DROP TABLE IF EXISTS `creators`;

CREATE TABLE `creators` (
  `id` INTEGER AUTO_INCREMENT,
  `name` VARCHAR(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'resources'
--
-- ---

DROP TABLE IF EXISTS `resources`;

CREATE TABLE `resources` (
  `id` INTEGER AUTO_INCREMENT,
  `id_creators` INTEGER DEFAULT NULL,
  `id_languages` INTEGER DEFAULT NULL,
  `id_resource_type` INTEGER DEFAULT NULL,
  `link` VARCHAR(255) NOT NULL,
  `date_added` TIMESTAMP NOT NULL,
  `date_created` TIMESTAMP NULL,
  `keywords` VARCHAR(255) NULL,
  `likes` INTEGER DEFAULT NULL,
  `dislikes` INTEGER DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'languages'
--
-- ---

DROP TABLE IF EXISTS `languages`;

CREATE TABLE `languages` (
  `id` INTEGER AUTO_INCREMENT,
  `name` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'resource_type'
--
-- ---

DROP TABLE IF EXISTS `resource_type`;

CREATE TABLE `resource_type` (
  `id` INTEGER AUTO_INCREMENT,
  `type` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `resources` ADD FOREIGN KEY (id_creators) REFERENCES `creators` (`id`);
ALTER TABLE `resources` ADD FOREIGN KEY (id_languages) REFERENCES `languages` (`id`);
ALTER TABLE `resources` ADD FOREIGN KEY (id_resource_type) REFERENCES `resource_type` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `creators` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `resources` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `languages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `resource_type` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
