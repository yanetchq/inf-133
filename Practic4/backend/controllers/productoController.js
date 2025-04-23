const productoModel = require('../models/productoModel');

module.exports = {
  getAll: async (req, res) => {
    const [rows] = await productoModel.getAll();
    res.json(rows);
  },
  create: async (req, res) => {
    await productoModel.create(req.body);
    res.json({ message: 'Producto creado' });
  },
  update: async (req, res) => {
    const { id } = req.params;
    await productoModel.update(id, req.body);
    res.json({ message: 'Producto actualizado' });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await productoModel.delete(id);
    res.json({ message: 'Producto eliminado' });
  }
};
