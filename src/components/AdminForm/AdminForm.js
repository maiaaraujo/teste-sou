import { TextField, Box, Button } from '@mui/material';
import React, { useState } from 'react';

const AdminForm = ({ adicionarOferta }) => {
  const [novaOferta, setNovaOferta] = useState({
    marca: '',
    modelo: '',
    ano: '',
    preco: '',
    cor: '',
    quilometragem: '',
    placa: '',
    cidade: '',
    fotos: '',
    dataCadastro: '',
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
      ano: '', 
      preco: '',
      cor: '', 
      quilometragem: '', 
      placa: '', 
      cidade:'', 
      fotos: '',
      dataCadastro:'',
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleSubmit}>Adicionar Nova Oferta</Button> 
    </div>
  );
};

export default AdminForm;
