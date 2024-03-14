import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CarFilter = ({ cars, onSelectCar }) => {
  return (
    <Autocomplete
      disablePortal
      id="car-filter"
      options={cars.map(car => car.marca + ' ' + car.modelo)} 
      onChange={(event, value) => {
        const selectedCar = cars.find(car => car.marca + ' ' + car.modelo === value)
        onSelectCar(selectedCar);
      }}
      renderInput={(params) => <TextField {...params} label="Buscar" />}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', maxWidth: '100vw' }}
    />
  );
};

export default CarFilter;
