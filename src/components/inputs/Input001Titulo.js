// src/components/Input001Titulo.js
import React from 'react';

const Input001Titulo = ({ label, value, onChange, Texto001Titulo, onTexto001TituloChange }) => {
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);

    // Lógica para escolher um determinado texto com base no valor do input
    const novoTexto = escolherTextoComBaseNoValor(newValue);
    onTexto001TituloChange(novoTexto);
  };

  const escolherTextoComBaseNoValor = (valor) => {
    // Lógica para escolher o texto com base no valor do input
    // No caso, não se aplica, vai retornar sempre o mesmo texto
    let t1 = `<br><strong><h2>1. OBJETO </h2></strong>
  <br>`.concat(valor);
  
    return t1;
  };

  return (
    <div>
      <label>{label}</label>
      <input id='titulo' placeholder='Descreva o Objeto' type="text" value={value} onChange={handleInputChange} />
    </div>
  );
};

export default Input001Titulo;
