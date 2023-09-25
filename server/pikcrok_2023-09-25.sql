# ************************************************************
# Sequel Ace SQL dump
# Version 20051
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 8.0.33)
# Database: pikcrok
# Generation Time: 2023-09-25 16:39:49 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table admin
# ------------------------------------------------------------

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;

INSERT INTO `admin` (`id`, `email`, `password`)
VALUES
	(1,'admin@admin.test','$2a$09$lskGiIGGwZbFuc2YpUllsO0i1rvwrPMDmGYlhrdHu7.tYSFDR5eM.');

/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table crok
# ------------------------------------------------------------

DROP TABLE IF EXISTS `crok`;

CREATE TABLE `crok` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(42) DEFAULT NULL,
  `img` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prix` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `crok` WRITE;
/*!40000 ALTER TABLE `crok` DISABLE KEYS */;

INSERT INTO `crok` (`id`, `title`, `img`, `description`, `prix`)
VALUES
	(1,'El Diablotín','ElDiablotin.JPG','Chorizo,Carne molida, Cebolla, Pimiento, Salsa de tomate, Queso, Oregano, Salsa Bechamel',22),
	(4,'El Ratatouillos','EL_RATATOUILLOS.JPG','Zapallo Italiano, Berenjena, Pimiento, Tomate, Ajo, Cebolla, Queso, Salsa Bechamel',20),
	(7,'El Vaquero Atún','EL_VAQUERO_ATÚN.JPG','Atún, Zapallo Italiano, Cebolla, Aji, Salsa Tomate, Queso, Salsa Bechamel',22),
	(8,'El Vesuvio','EL_VESUVIO.JPG','Berenjena, Chorizo, Jamón, Cebolla, Salsa Tomate, Queso, Salsa Bechamel',21),
	(9,'El Serrano','EL_SERRANO.JPG','Jamón Serrano, Cebolla, Oregano, Queso, Salsa Blanca',21),
	(10,'El salmón','El_salmon.JPG','Salmón, Puerro, Oregano, Queso, Salsa Blanca',23),
	(30,'El Señor CURRY','476857d47d17c309908a0ed01.jpg','Pollo, Cebolla, Pimiento, Salsa curry',22),
	(31,'El POLLITO','084ac15085b0f69f57a048600.jpg','Pollo, Cebolla, Salsa soya, Queso, Oregano, Salsa Bechamel',21),
	(32,'El señor PAPA','084ac15085b0f69f57a048601.jpg','Papas, Zanahoria, Chorizo, Ajo, Queso, Salsa Bechamel',22),
	(33,'El Señor CHORIZO finas hierbas','084ac15085b0f69f57a048602.jpg','Chorizo finas hierbas, Pimiento, Salsa tomate, Queso, Salsa Bechamel',22),
	(35,'test','d277b22840fcf231ebc57cf00.png','HOLA',22),
	(36,'dasa','43d885509653dc896e277e500.png','kljsl',23),
	(37,'fggdfj','1b463fa09bfd0e31175895000.png','ghgjks',21);

/*!40000 ALTER TABLE `crok` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
