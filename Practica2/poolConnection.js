const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'yanet',
  password: '123456', 
  database: 'testdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function main() {
  const connection = await pool.getConnection();
  console.log('Conectado a la base de datos');

  const start = Date.now();
  await connection.query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    ['John Doe', 'john@example.com']
  );
  const end = Date.now();
  console.log(`Tiempo de inserción: ${end - start} ms`);

  connection.release();
}

main().catch(err => {
  console.error('Error de conexión: ' + err.stack);
});
