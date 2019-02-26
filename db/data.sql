/* ========================================== */
/*                Roles Table                 */
/* ========================================== */
INSERT INTO rol(tipoRol, descripcion) VALUES('SUDO', 'Max Rol');
INSERT INTO rol(tipoRol, descripcion) VALUES('ADMIN', 'Med Rol');
INSERT INTO rol(tipoRol, descripcion) VALUES('WORKER', 'Min Rol');

/* ========================================== */
/*                Users Table                 */
/* ========================================== */
INSERT INTO usuario(idRol, ciPers, nombrePers, apellidoPers, sexo) VALUES(1, 1234567, 'Rolando', 'Torres', 'M');
INSERT INTO usuario(idRol, ciPers, nombrePers, apellidoPers, sexo) VALUES(2, 9876543, 'Mercedes', 'Amarilla', 'F');
INSERT INTO usuario(idRol, ciPers, nombrePers, apellidoPers, sexo) VALUES(3, 3456789, 'Christian', 'Duarte', 'M');
