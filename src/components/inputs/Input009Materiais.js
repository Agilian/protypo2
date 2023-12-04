import React, { useState, useEffect } from 'react';

function Input009Materiais({ onChange, label, Texto009Materiais, onTexto009MateriaisChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto009MateriaisChange(tempValue);
  }, [tempValue, onTexto009MateriaisChange]);

  let t0 = `<br><br><strong><h2>6. LISTA DE MATERIAIS</h2></strong>`
  let t1 = t0.concat(`<br><p>Não haverá aplicação de materiais para atendimento ao escopo do contrato.</p>`);
  let t2 = t0.concat(`<br><p>A contratada poderá propor, exclusivamente durante o processo de negociação, o fornecimento de materiais e serviços na modalidade de faturamento direto de seus fornecedores à CONTRATANTE;</p>
  <br><p>A CONTRATANTE recusará a oferta de miscelâneas e insumos diversos na modalidade de faturamento direto, reservando esta modalidade para itens de maior significância na composição dos custos;</p>
  <br><p>Havendo proposta de fornecimento por faturamento direto a CONTRATADA deverá listar na proposta técnica os itens propostos para esta modalidade bem como seus respectivos forcedores;</p>`);
 

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);

    switch (value) {
      case 'não':
        setTempValue(t1);
        break;
      case 'sim':
        setTempValue(t2);
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
          value="não"
          checked={selectedOption === 'não'}
          onChange={handleOptionChange}
        />
        não
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="sim"
          checked={selectedOption === 'sim'}
          onChange={handleOptionChange}
        />
        sim
      </label>
      <br />
      <br />
      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
    </div>
  );
}

export default Input009Materiais;
