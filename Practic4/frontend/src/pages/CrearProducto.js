import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CrearProducto = () => {
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    categoria: '',
    stock: '',
    marca: ''
  });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/api/productos', producto);
    Swal.fire({
      icon: 'success',
      title: 'Producto creado',
      text: 'El producto fue registrado exitosamente',
      timer: 2000,
      showConfirmButton: false
    });
    setTimeout(() => navigate('/'), 1000); // redirigir después de 1s
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4>Crear Producto</h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
        {Object.keys(producto).filter(key => key !== 'id').map((key) => (

            <div className="col-md-4 mb-3" key={key}>
              <input
                type={key === 'precio' || key === 'stock' ? 'number' : 'text'}
                name={key}
                value={producto[key]}
                onChange={handleChange}S
                placeholder={key}
                className="form-control"
                required
              />
            </div>
          ))}
        </div>
        <button className="btn btn-primary">Guardar</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/')}>Cancelar</button>
      </form>
    </div>
  );
};

export default CrearProducto;
