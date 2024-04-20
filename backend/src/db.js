const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'contraseña',
  database: 'nombre_de_la_base_de_datos'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos con el ID ' + connection.threadId);
});

module.exports = connection;
