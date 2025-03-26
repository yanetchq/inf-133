const db = require('../db');

const ProductoModel = {
  obtenerTodos: (callback) => {
    db.query('SELECT * FROM productos', callback);
  },

  crear: (nombre, precio, callback) => {
    db.query(
      'INSERT INTO productos (nombre, precio) VALUES (?, ?)',
      [nombre, precio],
      callback
    );
  },

  actualizar: (id, nombre, precio, callback) => {
    db.query(
      'UPDATE productos SET nombre = ?, precio = ? WHERE id = ?',
      [nombre, precio, id],
      callback
    );
  },

  eliminar: (id, callback) => {
    db.query('DELETE FROM productos WHERE id = ?', [id], callback);
  }
};

module.exports = ProductoModel;
