// Importamos la conexión de la BD
require('../config/config');

let rolModel = {}

// Obtenemos todos los roles
rolModel.getRol = (callback) => {
    if (connection) {
        connection.query('SELECT * FROM rol', (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }
}


// Insertamos nuevos roles
rolModel.insertRol = (rolData, callback) => {
    var sql = `INSERT INTO rol SET ?`
    connection.query(sql, rolData, (err, result) => {
        if (err) {
            throw err;
        } else {
            callback(null, {
                ok: true,
                rol: rolData
            });
        }
    });
}

// Actualizamos un rol existente
rolModel.updateRol = (rolData, callback) => {
    if (connection) {
        var sql = `UPDATE rol SET
                   tipoRol = ${connection.escape(rolData.tipoRol)},
                   descripcion = ${connection.escape(rolData.descripcion)},
                   WHERE idRol = ${connection.escape(rolData.idRol)}`

        connection.query(sql, (err, result) => {
            if (err) {
                throw err
            } else {
                callback(null, {
                    ok: true,
                    rol: rolData
                });
            }
        });
    }
};

// Borramos un rol
rolModel.deleteRol = (idRol, callback) => {
    if (connection) {
        var sql = `DELETE FROM rol WHERE idRol = ${idRol}`;

        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    ok: true,
                    mensaje: 'Rol eliminado'
                });
            }
        });
    } else {
        callback(null, {
            ok: false,
            mensaje: 'Ocurrio un error'
        });
    }
};

module.exports = rolModel;