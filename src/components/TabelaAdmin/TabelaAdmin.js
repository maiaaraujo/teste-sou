import React from 'react';

const TabelaAdmin = ({ ofertas, editarOferta, excluirOferta }) => {
  return (
    <div>
      <h2>Tabela de Ofertas</h2>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {ofertas.map(oferta => (
            <tr key={oferta.id}>
              <td>{oferta.marca}</td>
              <td>{oferta.modelo}</td>
              <td>
                <button onClick={() => editarOferta(oferta.id)}>Editar</button>
                <button onClick={() => excluirOferta(oferta.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaAdmin;
