import React, { useState } from 'react';
import AdminForm from '../../components/AdminForm/AdminForm';
import TabelaAdmin from '../../components/TabelaAdmin/TabelaAdmin';
import CarFilter from '../../components/CarFilter/CarFilter';

const AdminPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const [ofertas, setOfertas] = useState([
    { id: 1, marca: 'Toyota', modelo: 'Corolla' },
    { id: 2, marca: 'Honda', modelo: 'Civic' },
    
  ]);

  const top100Cars = [
    { label: 'Toyota Corolla', year: 2020 },
    { label: 'Honda Civic', year: 2018 },
  ];


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
      <CarFilter cars={top100Cars} onSelectCar={handleCarSelect} />
      <div style={{ marginTop: '20px' }}>
        <TabelaAdmin ofertas={ofertas} editarOferta={editarOferta} excluirOferta={excluirOferta} />
      </div>
      <AdminForm adicionarOferta={adicionarOferta} />
    </div>
  );
};

export default AdminPage;
