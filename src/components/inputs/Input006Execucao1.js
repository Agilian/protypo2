import React, { useState, useEffect } from 'react';

function Input006Execucao1({ onChange, label, Texto006Execucao, onTexto006ExecucaoChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto006ExecucaoChange(tempValue);
  }, [tempValue, onTexto006ExecucaoChange]);

  let t1 = `<br>Os itens de objeto firme sem recorrência serão fornecidos integralmente a partir do início do contrato.`;
  let t2 = `<br>Os itens de objeto firme sem recorrência serão fornecidos integralmente mediante Ordem de Serviço a ser emitida pela Aliança, considerando a conveniência do seu planejamento.`;
  let t3 = `<br>Os itens de objeto firme sem recorrência serão fornecidos parcial ou integralmente mediante Ordem de Serviço a ser emitida pela Aliança considerando a conveniência do seu planejamento.`;

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);

    switch (value) {
      case 'Total e imediata':
        setTempValue(t1);
        break;
      case 'Total programada':
        setTempValue(t2);
        break;
      case 'Parciais e programadas':
        setTempValue(t3);
        break;
      default:
        setTempValue('xxxxxxxxxxx');
    }
  };

  return (
    <div>
      <label><strong>{label}</strong></label>
      <br />
      <label title='a partir do início do contrato'>
        <input
          type="radio"
          value="Total e imediata"
          checked={selectedOption === 'Total e imediata'}
          onChange={handleOptionChange}
        />
        Total e imediata
      </label>
      <br />
      <label title='sob Ordem de Serviço emitidas pela Aliança'>
        <input
          type="radio"
          value="Total programada"
          checked={selectedOption === 'Total programada'}
          onChange={handleOptionChange}
        />
        Total programada
      </label>
      <br />
      <label title='sob Ordens de Serviço Emitidas pela Aliança'>
        <input
          type="radio"
          value="Parciais e programadas"
          checked={selectedOption === 'Parciais e programadas'}
          onChange={handleOptionChange}
        />
        Parciais e programadas
      </label>
      <br />
      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
    </div>
  );
}

export default Input006Execucao1;
