const db = require('../config/db');

const productoModel = {
  getAll: () => db.query('SELECT * FROM productos'),
  getById: (id) => db.query('SELECT * FROM productos WHERE id = ?', [id]),
  create: (data) => db.query('INSERT INTO productos SET ?', [data]),
  update: (id, data) => db.query('UPDATE productos SET ? WHERE id = ?', [data, id]),
  delete: (id) => db.query('DELETE FROM productos WHERE id = ?', [id])
};

module.exports = productoModel;
