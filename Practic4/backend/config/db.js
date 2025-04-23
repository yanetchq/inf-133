const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'yanet',
  password: '123456',
  database: 'tienda'
});

module.exports = db;
