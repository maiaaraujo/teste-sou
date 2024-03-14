import React from 'react';
import carrosData from '../../data/carros.json'; 
import BasicCard from '../../components/BasicCard/BasicCard';

function OfertasPage() {
  return (
    <div>
      <h1>Ofertas</h1>
      <div>
        {carrosData.carros.map((carro) => (
          <BasicCard key={carro.id} carro={carro} />
        ))}
      </div>
    </div>
  );
}

export default OfertasPage;
