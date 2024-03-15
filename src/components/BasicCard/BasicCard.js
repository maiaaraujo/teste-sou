import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import minhaImagem from '../../img/toyota1.jpg'

const BasicCard = ({ carro }) => {

  return (
    <Card sx={{ minWidth: 200, bgcolor: '#e9c46a', marginBottom: 2 }}>
      <CardContent>
        <Grid container spacing={2}> 
          <Grid item xs={6}> 
            <Typography variant="h5" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
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
          </Grid>
          <Grid item xs={6}> 
            <img src={minhaImagem} alt={`${carro.marca} ${carro.modelo}`} style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: '#2a9d8f' }}>Saiba mais</Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
