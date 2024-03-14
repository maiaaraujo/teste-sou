import { TextField, Box } from '@mui/material';
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
      <h2>Adicionar Nova Oferta</h2>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px' }}>
          <TextField id="marca" label="Marca" variant="outlined" name="marca" value={novaOferta.marca} onChange={handleChange}/>
          <TextField id="modelo" label="Modelo" variant="outlined" name="modelo" value={novaOferta.modelo} onChange={handleChange}/>
          <TextField id="ano" label="Ano" variant="outlined" name="ano" value={novaOferta.ano} onChange={handleChange}/>
          <TextField id="preco" label="Preço" variant="outlined" name="preco" value={novaOferta.preco} onChange={handleChange}/>
          <TextField id="cor" label="Cor" variant="outlined" name="cor" value={novaOferta.cor} onChange={handleChange}/>
          <TextField id="quilometragem" label="Quilometragem" variant="outlined" name="quilometragem" value={novaOferta.quilometragem} onChange={handleChange}/>
          <TextField id="placa" label="Placa" variant="outlined" name="placa" value={novaOferta.placa} onChange={handleChange}/>
          <TextField id="cidade" label="Cidade" variant="outlined" name="cidade" value={novaOferta.cidade} onChange={handleChange}/>
          <TextField id="fotos" label="Fotos" variant="outlined" name="fotos" value={novaOferta.fotos} onChange={handleChange}/>
          <TextField id="dataCadastro" label="Data de Cadastro" variant="outlined" name="dataCadastro" value={novaOferta.dataCadastro} onChange={handleChange}/>
        </Box>
        <button type="submit">Adicionar Oferta</button>
      </form>
    </div>
  );
};

export default AdminForm;
