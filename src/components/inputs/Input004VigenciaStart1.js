import React, { useState, useEffect } from 'react';

function Input004VigenciaStart1({ onChange, label, Texto004VigenciaStart, onTexto004VigenciaStartChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto004VigenciaStartChange(tempValue);
  }, [tempValue, onTexto004VigenciaStartChange]);

  let t1 = ` meses iniciando-se na data da ASSINATURA DO CONTRATO.`;
  let t2 = ` meses iniciando-se na data da REUNIÃO DE INÍCIO DE CONTRATO.`;
  let t3 = ` meses iniciando-se na data da EMISSÃO DA PRIMEIRA ORDEM DE SERVIÇO.`;

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);

    switch (value) {
      case 'Assinatura do Contrato':
        setTempValue(t1);
        break;
      case 'Reunião de início de contrato':
        setTempValue(t2);
        break;
      case 'Emissão da primeira OS':
        setTempValue(t3);
        break;
      default:
        setTempValue('xxxxxxxxxxx');
    }
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="Assinatura do Contrato"
          checked={selectedOption === 'Assinatura do Contrato'}
          onChange={handleOptionChange}
        />
        Assinatura do Contrato
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Reunião de início de contrato"
          checked={selectedOption === 'Reunião de início de contrato'}
          onChange={handleOptionChange}
        />
        Reunião de início de contrato
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Emissão da primeira OS"
          checked={selectedOption === 'Emissão da primeira OS'}
          onChange={handleOptionChange}
        />
        Emissão da primeira OS
      </label>
      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
      <p style={{ display: 'none' }}>valor temporário: {tempValue}</p>
    </div>
  );
}

export default Input004VigenciaStart1;
