var express = require('express');

var app = express();

// Models
var Rol = require('../models/rol');


// Ejecutamos el SELECT
app.get('/', (req, res) => {
    Rol.getRol((err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando los roles',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            roles: data
        });
    });
});


// Hacemos los INSERTS
app.post('/', (req, res) => {
    var body = req.body;

    var rolData = {
        tipoRol: body.tipoRol,
        descripcion: body.descripcion
    };

    console.log(body);

    Rol.insertRol(rolData, (err, data) => {
        if (data) {
            res.status(201).json({
                ok: true,
                rol: data
            });
        } else {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear rol',
                errors: err
            });
        }
    });
});

// ACTUALIZAMOS los roles
app.put('/:idRol', (req, res) => {
    var body = req.body;

    var rolData = {
        idRol: req.params.idRol,
        tipoRol: body.tipoRol,
        descripcion: body.descripcion
    };

    Rol.updateRol(rolData, (err, data) => {
        if (data) {
            res.status(200).json({
                ok: true,
                mensaje: 'Rol actualizado correctamente',
                rol: data
            });
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Error al actualizar el rol'
            });
        }
    });
});

// BORRAMOS un rol
app.delete('/:idRol', (req, res) => {
    Rol.deleteRol(req.params.idRol, (err, data) => {
        if (data && data.mensaje === 'Rol eliminado' || data.mensaje === 'Ocurrió un error') {
            res.status(200).json({
                ok: true,
                rol: data
            });
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Ocurrió un error al borrar el rol',
                errors: err
            });
        }
    });
});

module.exports = app;