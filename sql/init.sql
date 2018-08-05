SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema hunting_board
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hunting_board
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hunting_board` DEFAULT CHARACTER SET utf8 ;
USE `hunting_board` ;

-- -----------------------------------------------------
-- Table `hunting_board`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hunting_board`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(245) NOT NULL,
  `password` VARCHAR(245) NOT NULL,
  `firstName` VARCHAR(70) NOT NULL,
  `lastName` VARCHAR(70) NOT NULL,
  `birthDate` DATE NOT NULL,
  `gender` VARCHAR(64) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `email_UNIQUE` ON `hunting_board`.`users` (`email` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;