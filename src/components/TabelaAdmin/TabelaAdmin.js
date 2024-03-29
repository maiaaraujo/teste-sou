import React, { useState, useEffect } from 'react';
import carrosData from '../../data/carros.json'; 
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#264653',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TabelaAdmin = () => {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
   
    setCarros(carrosData.carros);
  }, []);

  const handleEditar = (id) => {
   
    console.log('Editar carro com ID:', id);
  };

  const handleDeletar = (id) => {

    console.log('Deletar carro com ID:', id);
    const novosCarros = carros.filter(carro => carro.id !== id);
    setCarros(novosCarros);
    
   
    const newData = { carros: novosCarros };
    localStorage.setItem('carrosData', JSON.stringify(newData));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Marca</StyledTableCell>
            <StyledTableCell align="right">Modelo</StyledTableCell>
            <StyledTableCell align="right">Ano</StyledTableCell>
            <StyledTableCell align="right">Preço</StyledTableCell>
            <StyledTableCell align="right">Cor</StyledTableCell>
            <StyledTableCell align="right">Km</StyledTableCell>
            <StyledTableCell align="right">Placa</StyledTableCell>
            <StyledTableCell align="right">Cidade</StyledTableCell>
            <StyledTableCell align="right">Data de cadastro</StyledTableCell>
            <StyledTableCell align="right">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carros.map(carro => (
            <StyledTableRow key={carro.id}>
              <StyledTableCell component="th" scope="row">
                {carro.marca}
              </StyledTableCell>
              <StyledTableCell align="right">{carro.modelo}</StyledTableCell>
              <StyledTableCell align="right">{carro.ano}</StyledTableCell>
              <StyledTableCell align="right">{carro.preco}</StyledTableCell>
              <StyledTableCell align="right">{carro.cor}</StyledTableCell>
              <StyledTableCell align="right">{carro.quilometragem}</StyledTableCell>
              <StyledTableCell align="right">{carro.placa}</StyledTableCell>
              <StyledTableCell align="right">{carro.cidade}</StyledTableCell>
              <StyledTableCell align="right">{carro.dataCadastro}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained" color="primary" onClick={() => handleEditar(carro.id)}>Editar</Button>
                <Button variant="contained" color="error" sx={{ marginLeft: '8px' }} onClick={() => handleDeletar(carro.id)}>Deletar</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabelaAdmin;
