import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductoList = () => {
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    const res = await axios.get('http://localhost:3001/api/productos');
    setProductos(res.data);
  };

  const confirmarEliminacion = (id) => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: '¡Esta accion eliminara el producto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3001/api/productos/${id}`);
        Swal.fire('Eliminado', 'El producto ha sido eliminado.', 'success');
        cargarProductos();
      }
    });
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div>
      <Link to="/crear" className="btn btn-success mb-3">Crear Producto</Link>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio (Bs)</th>
            <th>Categoria</th>
            <th>Stock</th>
            <th>Marca</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id}>              
              <td>{p.id}</td>              
              <td>{p.nombre}</td>
              <td>{p.precio} Bs</td>
              <td>{p.categoria}</td>
              <td>{p.stock}</td>
              <td>{p.marca}</td>
              <td>
                <Link to={`/editar/${p.id}`} className="btn btn-warning btn-sm me-2">Editar</Link>
                <button className="btn btn-danger btn-sm" onClick={() => confirmarEliminacion(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductoList;
