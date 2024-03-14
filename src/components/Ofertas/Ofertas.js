import React, { useState, useEffect } from 'react';
import { fetchCarros } from '../../services/api'; // Importe a função para buscar os carros
import Card from '../../components/Card/Card'; // Importe o componente Card

const OfertasPage = () => {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    const getCarros = async () => {
      try {
        const carrosData = await fetchCarros(); // Busque os carros da API
        setCarros(carrosData); // Atualize o estado com os carros obtidos
      } catch (error) {
        console.error('Erro ao buscar carros:', error);
      }
    };

    getCarros(); // Chame a função para buscar os carros quando o componente for montado
  }, []);

  return (
    <div>
      <h1>Ofertas</h1>
      <div>
        {carros.map((carro) => (
          <Card key={carro.id} carro={carro} /> // Renderize o componente Card para cada carro na lista
        ))}
      </div>
    </div>
  );
};

export default OfertasPage;
