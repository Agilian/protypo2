import React, { useState, useEffect } from 'react';

function Input012Atividades({ onChange, label , Texto012Atividades, onTexto012AtividadesChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto012AtividadesChange(tempValue);
  }, [tempValue, onTexto012AtividadesChange]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
    setTempValue(getTexto(value));
  };

  const getTexto = (value) => {
    switch (value) {
      case 'o contrato explícitamente':
        return t1;
      case 'a Aliança':
        return t2;
      case 'a contratada':
        return t3;
      case '(ambas as partes)':
        return t4;
      default:
        return 'xxxxxxxxxxx';
    }
  };

  let t0 = `<br><strong><h2>8. PLANEJAMENTO DAS ATIVIDADES</h2></strong>
  <br><p>8.1. Qualquer atividade a ser iniciada com mobilização de mão-de-obra a serviço da CONTRATANTE, para locais públicos, de terceiros ou de domínio da CONTRATANTE, devem ser previamente comunicadas ao fiscal do contrato;</p>
  <br><p>8.2. Além do planejamento de equipes de trabalho, dos equipamentos, materiais e ferramendas a CONTRATADA deverá considerar em seu planejamento a preparação, entrega e avaliação de toda documentação exigida pela CONTRATANTE;</p>`
  let t1 = t0.concat(`<br><p>8.3. As atividades deverão ser desenvolvidas durante a vigência do contrato em período e prazo específicos a serem informados na reunião de início de contrato.</p>`);
  let t2 = t0.concat(`<br><p>8.3. Respeitados os prazos pactuados, as atividades serão demandadas a qualquer tempo durante o período de vigência do contrato a critério da CONTRATANTE;</p>`);
  let t3 = t0.concat(`<br><p>8.3. Respeitados os prazos, vigência e as demais obrigações pactuadas no contrato, a CONTRATADA será a responsável pela determinação do período de execução das atividades.
  </p>Quando forem atividades na modalidade sob demanda, a CONTRATADA deverá fazer contrato prévio com a CONTRATANTE para combinar a data de emissão da Ordem de Serviço;</p>`);
  let t4 = t0.concat(`<br><p>8.3. Respeitados os prazos, vigência e as demais obrigações pactuadas no contrato, o período da execução das atividades será definido conjuntamente entre CONTRATADA e CONTRATANTE mediante emissão de Ordem de Serviço formal pela CONTRATANTE;</p>`)
  

  return (
    <div>
      <label><strong>{label}</strong></label><br />
      <label>
        <input
          type="radio"
          value="o contrato explícitamente"
          checked={selectedOption === 'o contrato explícitamente'}
          onChange={handleOptionChange}
        />
        o contrato explícitamente
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="a Aliança"
          checked={selectedOption === 'a Aliança'}
          onChange={handleOptionChange}
        />
        a Aliança
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="a contratada"
          checked={selectedOption === 'a contratada'}
          onChange={handleOptionChange}
        />
        a contratada
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="(ambas as partes)"
          checked={selectedOption === '(ambas as partes)'}
          onChange={handleOptionChange}
        />
        (ambas as partes)
      </label>
      <br />
      
      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
    </div>
  );
}

export default Input012Atividades;
