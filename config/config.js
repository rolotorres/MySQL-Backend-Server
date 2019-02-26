// ========================================== //
//         Configuraciones Globales           //
// ========================================== //

// Puerto habilitado
port = process.env.PORT || 3000;


// Base de datos
var mysql = require('mysql2');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    database: 'DB_NAME'
});