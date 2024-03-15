import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#2a9d8f' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, fontWeight: 'bold' }}
          >
            SouCar
          </IconButton>
          <Button color="inherit" component={Link} to="/oferta">Ofertas</Button> 
          <Button color="inherit" component={Link} to="/admin">Administrativo</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

