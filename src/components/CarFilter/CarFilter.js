import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CarFilter = ({ cars, onSelectCar }) => {
  return (
    <Autocomplete
      disablePortal
      id="car-filter"
      options={cars}
      getOptionLabel={(option) => option.label}
      onChange={(event, value) => onSelectCar(value)}
      renderInput={(params) => <TextField {...params} label="Buscar" />}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', maxWidth: '100vw' }}
    />
  );
};

export default CarFilter;
