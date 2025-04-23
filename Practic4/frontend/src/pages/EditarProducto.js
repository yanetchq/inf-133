import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    categoria: '',
    stock: '',
    marca: ''
  });

  const obtenerProducto = async () => {
    const res = await axios.get(`http://localhost:3001/api/productos`);
    const encontrado = res.data.find(p => p.id === parseInt(id));
    if (encontrado) setProducto(encontrado);
  };

  useEffect(() => {
    obtenerProducto();
  }, []);

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/api/productos/${id}`, producto);
    Swal.fire({
      icon: 'success',
      title: 'Producto actualizado',
      text: 'Los datos fueron modificados correctamente',
      timer: 2000,
      showConfirmButton: false
    });
    setTimeout(() => navigate('/'), 1000); // redirigir después de 1s
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4>Editar Producto</h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
        {Object.keys(producto).filter(key => key !== 'id').map((key) => (
            <div className="col-md-4 mb-3" key={key}>
              <input
                type={key === 'precio' || key === 'stock' ? 'number' : 'text'}
                name={key}
                value={producto[key]}
                onChange={handleChange}
                placeholder={key}
                className="form-control"
                required
              />
            </div>
          ))}
        </div>
        <button className="btn btn-warning">Actualizar</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/')}>Cancelar</button>
      </form>
    </div>
  );
};

export default EditarProducto;
