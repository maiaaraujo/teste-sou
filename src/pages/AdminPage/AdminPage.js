import React, { useState, useEffect } from 'react';
import TabelaAdmin from '../../components/TabelaAdmin/TabelaAdmin';
import CarFilter from '../../components/CarFilter/CarFilter';
import ModalForm from '../../components/ModalForm/ModalForm';
import carrosData from '../../data/carros.json'; 

const AdminPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    setFilteredCars(carrosData.carros); 
  }, []);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const handleFilterCars = (filteredData) => {
    setFilteredCars(filteredData);
  };

  return (
    <div>
      <h1 style={{ fontFamily: 'Arial, sans-serif', color: '#264653' }}>Administrativo</h1>
      <CarFilter cars={carrosData.carros} onSelectCar={handleCarSelect} onFilter={handleFilterCars} />
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <TabelaAdmin carros={filteredCars} />
      </div>
      <ModalForm/>
    </div>
  );
};

export default AdminPage;
