import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ListaProductos from './pages/ListaProductos';
import CrearProducto from './pages/CrearProducto';
import EditarProducto from './pages/EditarProducto';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gestion de Productos</h1>
      <Routes>
        <Route path="/" element={<ListaProductos />} />
        <Route path="/crear" element={<CrearProducto />} />
        <Route path="/editar/:id" element={<EditarProducto />} />
      </Routes>
    </div>
  );
}

export default App;
