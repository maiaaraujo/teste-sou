import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CarFilter = ({ cars, onSelectCar, onFilter }) => {
  const carOptions = cars.map(car => `${car.marca} ${car.modelo}`); // Cria uma lista de opções legíveis ao usuário

  const handleFilterChange = (event, value) => {
    if (value) {
      const selectedCar = cars.find(car => `${car.marca} ${car.modelo}` === value);
      onSelectCar(selectedCar); // Seleciona o carro
    } else {
      onFilter(cars); // Sem filtro, exibe todos os carros
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="car-filter"
      options={carOptions}
      onChange={handleFilterChange}
      renderInput={(params) => <TextField {...params} label="Buscar" />}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', maxWidth: '100vw' }}
    />
  );
};

export default CarFilter;
