CREATE DATABASE intratur;

USE intratur;

CREATE TABLE rol(
    idRol INTEGER AUTO_INCREMENT,
    tipoRol VARCHAR(10) NOT NULL,
    descripcion VARCHAR(100) DEFAULT NULL,
    CONSTRAINT idRol_PK PRIMARY KEY(idRol)
);

CREATE TABLE usuario(
    idPers INTEGER AUTO_INCREMENT,
    idRol INTEGER NOT NULL,
    ciPers INTEGER NOT NULL,
    nombrePers VARCHAR(30) NOT NULL,
    apellidoPers VARCHAR(30) NOT NULL,
    sexo CHAR(1) NOT NULL,
    CONSTRAINT idPers_PK PRIMARY KEY(idPers),
    CONSTRAINT idRol_PK FOREIGN KEY (idRol) REFERENCES rol(idRol),
    CONSTRAINT ciPers_CHK CHECK(ciPers > 0),
    CONSTRAINT sexo_CHK CHECK (sexo = 'F' OR sexo= 'M'),
    CONSTRAINT UC_Pers UNIQUE (ciPers)
);