import React, { useState, useEffect } from 'react';

function Input014AtividadesAprova({ onChange, label , Texto014AtividadesAprova, onTexto014AtividadesAprovaChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto014AtividadesAprovaChange(tempValue);
  }, [tempValue, onTexto014AtividadesAprovaChange]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
    setTempValue(getTexto(value));
  };

  const getTexto = (value) => {
    switch (value) {
      case 'a Aliança aprova':
        return t1;
      case 'ambos em conjunto':
        return t2;
      default:
        return 'xxxxxxxxxxx';
    }
  };

  let t1 = `<br><p>8.5. O Cronograma elaborado deverá ser submetido para aprovação e contribuições prévias pela CONTRATANTE</p>
   <p>A CONTRATANTE poderá requerer correções, adequações do cronograma, comunicar datas e períodos parcial ou totalmente restritivas, bem como apresentar outras contribuições ao cronograma de atividades;</p>`
  let t2 = `<br><p>8.5. A CONTRATADA deverá elaborar uma primeira versão do cronograma de atividades e posteriormente, em conjunto com a CONTRATANTE realizar a compatibilização do seu cronograma com outras atividades externas a seu escopo e que potencialmente podem interferir na execução das tarefas;</p>`;
  
  return (
    <div>
      <label><strong>{label}</strong></label><br />
      <label>
        <input
          type="radio"
          value="a Aliança aprova"
          checked={selectedOption === 'a Aliança aprova'}
          onChange={handleOptionChange}
        />
        a Aliança aprova
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="ambos em conjunto"
          checked={selectedOption === 'ambos em conjunto'}
          onChange={handleOptionChange}
        />
        ambos em conjunto
      </label>
      
      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
    </div>
  );
}

export default Input014AtividadesAprova;
