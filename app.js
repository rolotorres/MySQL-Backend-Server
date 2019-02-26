require('./config/config');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


// Body parser: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Importar Rutas
var appRoutes = require('./routes/app');
var rolRoutes = require('./routes/rol');

// Conexión a la base de datos
app.listen(port, () => {
    console.log(`Express server puerto ${port}: \x1b[32m%s\x1b[0m`, `online`);
});


// Rutas
app.use('/rol', rolRoutes);
app.use('/', appRoutes);