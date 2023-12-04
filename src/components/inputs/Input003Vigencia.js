// src/components/Input001Titulo.js
import React from 'react';

const Input003Vigencia = ({ label, value, onChange, Texto003Vigencia, onTexto003VigenciaChange }) => {
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);

    // Lógica para escolher um determinado texto com base no valor do input
    const novoTexto = escolherTextoComBaseNoValor(newValue);
    onTexto003VigenciaChange(novoTexto);
  };

  const escolherTextoComBaseNoValor = (valor) => {
    // Lógica para escolher o texto com base no valor do input
    // No caso, não se aplica, vai retornar sempre o mesmo texto
    let t1 = `<br><br><strong><h2>2. VIGÊNCIA </h2></strong>
  <br>2.1. O contrato para o objeto deste MD deverá ter a duração de `.concat(valor)
  
    return t1;
  };

  return (
    <div>
      <br></br>
      <label>{label}</label>
      <input placeholder='12' id='meses'  type="text" value={value} onChange={handleInputChange} />
      <label><strong>meses, a partir da...</strong></label>
    </div>
  );
};

export default Input003Vigencia;