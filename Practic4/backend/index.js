const express = require('express');
const cors = require('cors');
const app = express();
const productoRoutes = require('./routes/productoRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/productos', productoRoutes);

app.listen(3001, () => {
  console.log('Servidor backend en http://localhost:3001');
});
