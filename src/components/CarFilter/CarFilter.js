import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CarFilter = ({ cars, onSelectCar, onFilter }) => {
  const carOptions = cars.map(car => `${car.marca} ${car.modelo}`); 
  const handleFilterChange = (event, value) => {
    if (value) {
      const selectedCar = cars.find(car => `${car.marca} ${car.modelo}` === value);
      onSelectCar(selectedCar); 
    } else {
      onFilter(cars); 
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
