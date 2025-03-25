const mysql = require('mysql2/promise');

async function main() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'yanet',
    password: '123456', 
    database: 'testdb'
  });

  console.log('Conectado a la base de datos');

  const start = Date.now();
  await connection.query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    ['John Doe', 'john@example.com']
  );
  const end = Date.now();
  console.log(`Tiempo de inserción: ${end - start} ms`);

  await connection.end();
}

main().catch(err => {
  console.error('Error de conexión: ' + err.stack);
});
