-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: indumatics
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `idCliente` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Direccion` varchar(100) DEFAULT NULL,
  `Localidad` varchar(60) DEFAULT NULL,
  `Provincia` varchar(45) DEFAULT NULL,
  `Pais` varchar(45) DEFAULT 'Argentina',
  `Email` varchar(255) DEFAULT NULL,
  `Telefonos` varchar(250) DEFAULT NULL,
  `idSucursal` int(11) NOT NULL,
  `FUA` datetime DEFAULT CURRENT_TIMESTAMP,
  `FI` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idCliente`),
  UNIQUE KEY `idCliente_UNIQUE` (`idCliente`),
  UNIQUE KEY `Nombre_UNIQUE` (`Nombre`),
  KEY `fk_clientes_sucursales1_idx` (`idSucursal`),
  CONSTRAINT `fk_clientes_sucursales1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursales` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (49,'INDUMATICS S.A.','Valentín Torra 5016','Paraná','Entre Ríos','Argentina','perfiles@indumatics.com.ar',' 543434362033 / 4301014 / 4301016',1,'2017-07-06 19:09:17','2017-07-06 19:09:17'),(50,'Alumax','Calle Publica 189','Corrientes','Corrientes','Argentina','alumax@gmail.com','4362356',1,'2017-07-06 19:15:24','2017-07-06 19:15:24');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ALLOW_INVALID_DATES,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `indumatics`.`clientes_BEFORE_UPDATE` BEFORE UPDATE ON `clientes` FOR EACH ROW
BEGIN
	SET new.FUA = now();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `colores`
--

DROP TABLE IF EXISTS `colores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colores` (
  `idColor` int(11) unsigned NOT NULL,
  `Color` varchar(45) NOT NULL,
  `IncrementoPeso` float NOT NULL DEFAULT '0',
  `FI` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `FUA` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idColor`),
  UNIQUE KEY `Color_UNIQUE` (`Color`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colores`
--

LOCK TABLES `colores` WRITE;
/*!40000 ALTER TABLE `colores` DISABLE KEYS */;
INSERT INTO `colores` VALUES (1,'BLANCO BRILLANTE',0,'2017-07-07 14:19:57','2017-07-07 14:20:10');
/*!40000 ALTER TABLE `colores` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `indumatics`.`colores_BEFORE_UPDATE` BEFORE UPDATE ON `colores` FOR EACH ROW
BEGIN
set new.FUA = now();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `documentos`
--

DROP TABLE IF EXISTS `documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documentos` (
  `idDocumento` int(11) NOT NULL AUTO_INCREMENT,
  `idTipoDocumento` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `idSucursal` int(11) NOT NULL,
  `Fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `FechaEntrega` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Comentarios` varchar(250) DEFAULT NULL,
  `FUA` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idDocumento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos`
--

LOCK TABLES `documentos` WRITE;
/*!40000 ALTER TABLE `documentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `documentos` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `indumatics`.`documentos_BEFORE_UPDATE` BEFORE UPDATE ON `documentos` FOR EACH ROW
BEGIN
	set new.FUA = now();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `documentos_items`
--

DROP TABLE IF EXISTS `documentos_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documentos_items` (
  `idDocumentoDetalle` int(11) NOT NULL AUTO_INCREMENT,
  `idDocumento` int(11) NOT NULL,
  `idPerfil` int(11) NOT NULL,
  `idColor` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL DEFAULT '1',
  `Unidades` float NOT NULL DEFAULT '0',
  `PrecioUnidad` float NOT NULL DEFAULT '0',
  `Descuento` float NOT NULL DEFAULT '0',
  `FI` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `FUA` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idDocumentoDetalle`,`idDocumento`),
  UNIQUE KEY `idDocumentoDetalle_UNIQUE` (`idDocumentoDetalle`),
  KEY `fk_documentos_detalle_colores1_idx` (`idColor`),
  KEY `fk_documentos_detalle_perfiles1_idx` (`idPerfil`),
  KEY `fk_documento_detalle_idx` (`idDocumento`),
  CONSTRAINT `fk_detalle_documentos` FOREIGN KEY (`idDocumento`) REFERENCES `documentos` (`idDocumento`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_detalle_perfiles` FOREIGN KEY (`idPerfil`) REFERENCES `perfiles` (`idPerfil`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos_items`
--

LOCK TABLES `documentos_items` WRITE;
/*!40000 ALTER TABLE `documentos_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `documentos_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `indumatics`.`documentos_detalle_BEFORE_UPDATE` BEFORE UPDATE ON `documentos_items` FOR EACH ROW
BEGIN
	set new.FUA = now();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `lineas`
--

DROP TABLE IF EXISTS `lineas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lineas` (
  `idLinea` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id de la Linea',
  `Nombre` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT 'Nombre descriptivo de la Linea',
  `Descripcion` varchar(150) CHARACTER SET utf8 DEFAULT NULL COMMENT 'Descripcion ',
  PRIMARY KEY (`idLinea`),
  UNIQUE KEY `linea_UNIQUE` (`Nombre`),
  UNIQUE KEY `idlinea_UNIQUE` (`idLinea`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Lineas disponibles';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lineas`
--

LOCK TABLES `lineas` WRITE;
/*!40000 ALTER TABLE `lineas` DISABLE KEYS */;
INSERT INTO `lineas` VALUES (1,'Tradicional','Herrero'),(3,'3000A','A30 New'),(4,'6000','LInea MOdena');
/*!40000 ALTER TABLE `lineas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfiles`
--

DROP TABLE IF EXISTS `perfiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfiles` (
  `idPerfil` int(11) NOT NULL AUTO_INCREMENT,
  `CodigoPerfil` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT 'Codigo de perfil',
  `Descripcion` varchar(150) CHARACTER SET utf8 NOT NULL COMMENT 'Comentarios del tipo de perfil',
  `Largo` int(10) unsigned NOT NULL DEFAULT '6050' COMMENT 'Largo de la barra en milimetros',
  `Peso` float unsigned NOT NULL DEFAULT '0' COMMENT 'Peso en Kilos popr metro',
  `Barras` int(10) unsigned NOT NULL DEFAULT '1' COMMENT 'Cantidad de barras por paquete',
  `idLinea` int(11) NOT NULL COMMENT 'Id conexion tabla Lineas',
  `FI` datetime DEFAULT CURRENT_TIMESTAMP,
  `FUA` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idPerfil`),
  UNIQUE KEY `CodigoPerfil_UNIQUE` (`CodigoPerfil`),
  KEY `fk_perfiles_lineas_idx` (`idLinea`),
  CONSTRAINT `fk_perfiles_lineas` FOREIGN KEY (`idLinea`) REFERENCES `lineas` (`idLinea`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfiles`
--

LOCK TABLES `perfiles` WRITE;
/*!40000 ALTER TABLE `perfiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `perfiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sucursales`
--

DROP TABLE IF EXISTS `sucursales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sucursales` (
  `idSucursal` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Descripcion` varchar(250) DEFAULT NULL,
  `FI` datetime DEFAULT CURRENT_TIMESTAMP,
  `FUA` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idSucursal`),
  UNIQUE KEY `idSucursal_UNIQUE` (`idSucursal`),
  UNIQUE KEY `Nombre_UNIQUE` (`Nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucursales`
--

LOCK TABLES `sucursales` WRITE;
/*!40000 ALTER TABLE `sucursales` DISABLE KEYS */;
INSERT INTO `sucursales` VALUES (1,'Corrientes','Sucursale Corrientes Capital','2017-06-26 11:31:57','2017-06-26 11:36:02'),(3,'Rio Cuarto','Sucursal Rio Cuarto, Cordoba','2017-06-26 16:37:57','2017-07-07 17:34:59'),(5,'Villa Maria','Sucursal Villa Maria, Cordoba','2017-06-26 16:39:47','2017-07-07 17:34:59');
/*!40000 ALTER TABLE `sucursales` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ALLOW_INVALID_DATES,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `indumatics`.`sucursales_BEFORE_UPDATE`
BEFORE UPDATE ON `indumatics`.`sucursales`
FOR EACH ROW
BEGIN
	SET NEW.FUA = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tipo_documento`
--

DROP TABLE IF EXISTS `tipo_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_documento` (
  `idTipoDocumento` int(11) NOT NULL AUTO_INCREMENT,
  `Letra` char(1) NOT NULL,
  `Documento` varchar(30) NOT NULL,
  `Descripcion` varchar(150) DEFAULT NULL,
  `isActualizaStock` tinyint(1) NOT NULL DEFAULT '0',
  `isEditable` tinyint(1) NOT NULL DEFAULT '0',
  `isSuma` tinyint(1) NOT NULL DEFAULT '1',
  `FI` datetime DEFAULT CURRENT_TIMESTAMP,
  `FUA` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idTipoDocumento`),
  UNIQUE KEY `idTipoDocumento_UNIQUE` (`idTipoDocumento`),
  UNIQUE KEY `Letra_UNIQUE` (`Letra`),
  UNIQUE KEY `Documento_UNIQUE` (`Documento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_documento`
--

LOCK TABLES `tipo_documento` WRITE;
/*!40000 ALTER TABLE `tipo_documento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `idSucursal` int(11) NOT NULL,
  `Usuario` varchar(20) NOT NULL,
  `Clave` char(40) NOT NULL,
  `idSesion` char(40) DEFAULT NULL,
  `FI` datetime DEFAULT CURRENT_TIMESTAMP,
  `FUA` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idSucursal`,`Usuario`),
  UNIQUE KEY `Usuario_UNIQUE` (`Usuario`),
  UNIQUE KEY `idSesion_UNIQUE` (`idSesion`),
  CONSTRAINT `fk_usuarios_sucursales1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursales` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'MAX','4e46dc0969e6621f2d61d2228e3cd91b75cd9edc','d07c6a99f51082d415b9a9c28385fbae7cca2cee','2017-06-27 18:52:27','2017-07-07 21:28:19');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ALLOW_INVALID_DATES,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `indumatics`.`usuarios_BEFORE_INSERT`
BEFORE INSERT ON `indumatics`.`usuarios`
FOR EACH ROW
BEGIN
	SET NEW.idSesion = SHA(concat(NEW.Usuario,cast(now()as char(20))));
    SET NEW.Clave = SHA(new.Clave);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ALLOW_INVALID_DATES,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `indumatics`.`usuarios_BEFORE_UPDATE`
BEFORE UPDATE ON `indumatics`.`usuarios`
FOR EACH ROW
BEGIN
	SET NEW.FUA = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping events for database 'indumatics'
--

--
-- Dumping routines for database 'indumatics'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-07 18:41:05
