import React from 'react';

const Card = ({ carro }) => {
  return (
    <div>
      <h2>{carro.marca} {carro.modelo}</h2>
      <p>Ano: {carro.ano}</p>
      <p>Preço: R${carro.preco}</p>
    </div>
  );
};

export default Card;
