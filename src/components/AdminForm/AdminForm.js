import React, { useState } from 'react';

const AdminForm = ({ adicionarOferta }) => {
  const [novaOferta, setNovaOferta] = useState({
    marca: '',
    modelo: '',
   
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setNovaOferta({ ...novaOferta, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    adicionarOferta(novaOferta);
    
    setNovaOferta({
      marca: '',
      modelo: '',
      
    });
  };

  return (
    <div>
      <h2>Adicionar Nova Oferta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Marca:
          <input type="text" name="marca" value={novaOferta.marca} onChange={handleChange} />
        </label>
        <label>
          Modelo:
          <input type="text" name="modelo" value={novaOferta.modelo} onChange={handleChange} />
        </label>
        <button type="submit">Adicionar Oferta</button>
      </form>
    </div>
  );
};

export default AdminForm;
