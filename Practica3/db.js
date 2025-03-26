const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yanet',
  password: '123456',
  database: 'tienda'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

module.exports = connection;
