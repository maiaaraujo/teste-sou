import React, { useState } from 'react';
import { TextField, Grid, Button } from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900, 
  height: 500, 
  padding: 10,
  backgroundColor: '#fff', 
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'auto', 
};

const ModalForm = ({ adicionarOferta }) => {
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
  const [open, setOpen] = useState(false);

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
    setOpen(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ backgroundColor: '#fb8500' }} variant="contained" onClick={handleOpen}>Adicionar Oferta</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <h2 style={{ fontFamily: 'Arial, sans-serif', color: '#264653' }}>Adicionar Nova Oferta</h2>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField id="marca" label="Marca" variant="outlined" name="marca" value={novaOferta.marca} onChange={handleChange} fullWidth/>
              </Grid>
              <Grid item xs={6}>
                <TextField id="modelo" label="Modelo" variant="outlined" name="modelo" value={novaOferta.modelo} onChange={handleChange} fullWidth/>
              </Grid>
              <Grid item xs={6}>
                <TextField id="ano" label="Ano" variant="outlined" name="ano" value={novaOferta.ano} onChange={handleChange} fullWidth/>
              </Grid>
              <Grid item xs={6}>
                <TextField id="preco" label="Preço" variant="outlined" name="preco" value={novaOferta.preco} onChange={handleChange} fullWidth/>
              </Grid>
              <Grid item xs={6}>
                <TextField id="cor" label="Cor" variant="outlined" name="cor" value={novaOferta.cor} onChange={handleChange} fullWidth/>
              </Grid>
              <Grid item xs={6}>
                <TextField id="quilometragem" label="Quilometragem" variant="outlined" name="quilometragem" value={novaOferta.quilometragem} onChange={handleChange} fullWidth/>
              </Grid>
              <Grid item xs={6}>
                <TextField id="placa" label="Placa" variant="outlined" name="placa" value={novaOferta.placa} onChange={handleChange} fullWidth/>
              </Grid>
              <Grid item xs={6}>
                <TextField id="cidade" label="Cidade" variant="outlined" name="cidade" value={novaOferta.cidade} onChange={handleChange} fullWidth/>
              </Grid>
              <Grid item xs={6}>
                <TextField id="fotos" label="Fotos" variant="outlined" name="fotos" value={novaOferta.fotos} onChange={handleChange} fullWidth/>
              </Grid>
              <Grid item xs={6}>
                <TextField id="dataCadastro" label="Data de Cadastro" variant="outlined" name="dataCadastro" value={novaOferta.dataCadastro} onChange={handleChange} fullWidth/>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit"  sx={{ backgroundColor: '#fb8500' }} fullWidth>Adicionar Oferta</Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
