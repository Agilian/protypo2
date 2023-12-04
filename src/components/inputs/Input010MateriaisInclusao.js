import React, { useState, useEffect } from 'react';

function Input009MateriaisInclusao({ onChange, label, Texto010MateriaisInclusao, onTexto010MateriaisInclusaoChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto010MateriaisInclusaoChange(tempValue);
  }, [tempValue, onTexto010MateriaisInclusaoChange]);

  let t1 = `<br>Os seguintes materiais deverão ser supridos pela cotratada para utilização como parte da prestação dos serviços:`;
  let t2 = `<br>xxxxxxInput010MateriaisInclusao-t2xxxxxxx
  <br>A contratada poderá propor, exclusivamente durante o processo de negociação, o fornecimento de materiais e serviços na modalidade de faturamento direto de seus fornecedores à CONTRATANTE;
  <br>A CONTRATANTE recusará a oferta de miscelâneas e insumos diversos na modalidade de faturamento direto, reservando esta modalidade para itens de maior significância na composição dos custos;
  <br>Havendo proposta de fornecimento por faturamento direto a CONTRATADA deverá listar na proposta técnica os itens propostos para esta modalidade bem como seus respectivos forcedores;
  `;
 

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);

    switch (value) {
      case 'já estava incluso':
        setTempValue(t1);
        break;
      case 'seria comprado a parte':
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
          value="já estava incluso"
          checked={selectedOption === 'já estava incluso'}
          onChange={handleOptionChange}
        />
        já estava incluso
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="seria comprado a parte"
          checked={selectedOption === 'seria comprado a parte'}
          onChange={handleOptionChange}
        />
        seria comprado a parte
      </label>
      <br />
      <br />
      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
    </div>
  );
}

export default Input009MateriaisInclusao;
