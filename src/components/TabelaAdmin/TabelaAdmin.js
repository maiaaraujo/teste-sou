import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#c1121f',
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

function createData(
  marca,
  modelo,
  ano,
  preco,
  cor,
) {
  return { marca, modelo, ano, preco, cor };
}

const rows = [
  createData('Toyota', 'Corolla', 2020, 85000, 'Preto'),
  createData('Honda', 'Civic', 2018, 75000, 'Branco'),
];

export default function TabelaAdmin() {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.marca}>
              <StyledTableCell component="th" scope="row">
                {row.marca}
              </StyledTableCell>
              <StyledTableCell align="right">{row.modelo}</StyledTableCell>
              <StyledTableCell align="right">{row.ano}</StyledTableCell>
              <StyledTableCell align="right">{row.preco}</StyledTableCell>
              <StyledTableCell align="right">{row.cor}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
