import React, { useState, useEffect } from 'react';

function Input005Tipo1({ onChange, label, Texto005Tipo, onTexto005TipoChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto005TipoChange(tempValue);
  }, [tempValue, onTexto005TipoChange]);

  let t1 = `<br><strong><h2>3. FORMAS DE ACIONAMENTO E DEMANDA DO CONTRATO</h2></strong>
  <br><br><p>3.1. Os itens de contrato serão demandados nas formas assinaladas: (x) Objeto firme sem recorrência; ( ) Objeto firme com recorrência fixada; ( ) Objeto sob demanda </p>
  <br><p>3.2. Os itens de objeto firme sem recorrência terão suas quantidades fornecidas uma única vez durante a vigência do contrato de acordo com os prazos estabelecidos entre as partes.</p>`;

  let t2 = `<br><strong><h2>3. FORMAS DE ACIONAMENTO E DEMANDA DO CONTRATO</h2></strong>
  <br><br><p>3.1. Os itens de contrato serão demandados nas formas assinaladas: ( ) Objeto firme sem recorrência; (x) Objeto firme com recorrência fixada; ( ) Objeto sob demanda</p>
  <br><p>3.2. Os itens de objeto firme com recorrência fixada deverão ser fornecidos periódicamente durante a vigência do contrato de acordo com a recorrência e prazos estabelecidos entre as partes. A data de início dos ciclos de recorrência será determinada na reunião de início de contrato.</p>`;

  let t3 = `<br><strong><h2>3. FORMAS DE ACIONAMENTO E DEMANDA DO CONTRATO</h2></strong>
  <br><br><p>3.1. Os itens de contrato serão demandados nas formas assinaladas: ( ) Objeto firme sem recorrência; ( ) Objeto firme com recorrência fixada; (x) Objeto sob demanda</p>
  <br><p>3.2. Os itens e quantidades de objeto sob demanda não devem gerar expectativa de execução.  As OSs serão emitidas sob demanda exclusivamente pela conveniência de planejamento da Aliança.</p>`;

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);

    switch (value) {
      case 'Firme sem recorrência':
        setTempValue(t1);
        break;
      case 'Firme com recorrência fixada':
        setTempValue(t2);
        break;
      case 'Objeto sob demanda':
        setTempValue(t3);
        break;
      default:
        setTempValue('xxxxxxxxxxx');
    }
  };

  return (
    <div>
      <br />
      <label><strong>{label}</strong></label>
      <br />
      <label>
        <input
          type="radio"
          value="Firme sem recorrência"
          checked={selectedOption === 'Firme sem recorrência'}
          onChange={handleOptionChange}
        />
        Firme sem recorrência
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Firme com recorrência fixada"
          checked={selectedOption === 'Firme com recorrência fixada'}
          onChange={handleOptionChange}
        />
        Firme com recorrência fixada
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Objeto sob demanda"
          checked={selectedOption === 'Objeto sob demanda'}
          onChange={handleOptionChange}
        />
        Objeto sob demanda
      </label>
      <br />
      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
    </div>
  );
}

export default Input005Tipo1;
