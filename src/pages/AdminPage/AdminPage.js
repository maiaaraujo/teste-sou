import React, { useState } from 'react';
import AdminForm from '../../components/AdminForm/AdminForm';
import TabelaAdmin from '../../components/TabelaAdmin/TabelaAdmin';

const AdminPage = () => {
  const [ofertas, setOfertas] = useState([
    { id: 1, marca: 'Toyota', modelo: 'Corolla' },
    { id: 2, marca: 'Honda', modelo: 'Civic' },
    
  ]);

  const adicionarOferta = novaOferta => {
    setOfertas([...ofertas, { id: ofertas.length + 1, ...novaOferta }]);
  };

  const editarOferta = id => {
  
    console.log('Editar oferta com ID:', id);
  };

  const excluirOferta = id => {
    
    console.log('Excluir oferta com ID:', id);
  };

  return (
    <div>
      <h1>Administrativo</h1>
      <TabelaAdmin ofertas={ofertas} editarOferta={editarOferta} excluirOferta={excluirOferta} />
      <AdminForm adicionarOferta={adicionarOferta} />
    </div>
  );
};

export default AdminPage;
