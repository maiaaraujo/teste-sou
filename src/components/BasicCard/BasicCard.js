import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BasicCard = ({ carro }) => {
  return (
    <Card sx={{ minWidth: 200, bgcolor: '#e9c46a', marginBottom: 2 }}>
      <CardContent>
      <img src={`${process.env.REACT_APP_IMAGE_PATH}/toyota1.jpg`} alt="Toyota" />

        <Typography variant="h5" component="div">
          {carro.marca} {carro.modelo}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Ano: {carro.ano}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Preço: R${carro.preco}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Visualizações: {carro.visualizacoes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba mais</Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
