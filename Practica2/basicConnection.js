const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ' ',
  database: 'testdb'
});

connection.connect(err => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
    
  const start = Date.now();
  connection.query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    ['John Doe', 'john@example.com'],
    (err, results) => {
      if (err) throw err;
      const end = Date.now();
      console.log(`Tiempo de inserción: ${end - start} ms`);
      connection.end();
    }
  );
});
