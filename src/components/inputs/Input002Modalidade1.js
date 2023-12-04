import React, { useState, useEffect } from 'react';

function Input002Modalidade1({ onChange, label , Texto002Modalidade, onTexto002ModalidadeChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto002ModalidadeChange(tempValue);
  }, [tempValue, onTexto002ModalidadeChange]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
    setTempValue(getTexto(value));
  };

  const getTexto = (value) => {
    switch (value) {
      case 'Serviço':
        return t1;
      case 'Consultoria':
        return t2;
      case 'Licença':
        return t3;
      case 'Mão de obra':
        return t4;
      case 'Locação ou Comodato':
        return t5;
      case 'Aquisição de equipamento':
        return t6;
      case 'Aquisição de Materiais':
        return t7;
      default:
        return 'xxxxxxxxxxx';
    }
  };

  let t1 = `<br>O objeto do presente Memorial Descritivo (MD) é caracterizado pelas modalidades assinaladas  abaixo: (x) Serviço; ( ) Consultoria; ( ) Licença; ( ) Mão de Obra; ( ) Locação ou Comodato; ( ) Aquisição de Equipamento; ( ) Aquisição de Materiais`;
  let t2 = `<br>O objeto do presente Memorial Descritivo (MD) é caracterizado pelas modalidades assinaladas  abaixo: ( ) Serviço; (x) Consultoria; ( ) Licença; ( ) Mão de Obra; ( ) Locação ou Comodato; ( ) Aquisição de Equipamento; ( ) Aquisição de Materiais`;
  let t3 = `<br>O objeto do presente Memorial Descritivo (MD) é caracterizado pelas modalidades assinaladas  abaixo: ( ) Serviço; ( ) Consultoria; (x) Licença; ( ) Mão de Obra; ( ) Locação ou Comodato; ( ) Aquisição de Equipamento; ( ) Aquisição de Materiais`;
  let t4 = `<br>O objeto do presente Memorial Descritivo (MD) é caracterizado pelas modalidades assinaladas  abaixo: ( ) Serviço; ( ) Consultoria; ( ) Licença; (x) Mão de Obra; ( ) Locação ou Comodato; ( ) Aquisição de Equipamento; ( ) Aquisição de Materiais`;
  let t5 = `<br>O objeto do presente Memorial Descritivo (MD) é caracterizado pelas modalidades assinaladas  abaixo: ( ) Serviço; ( ) Consultoria; ( ) Licença; ( ) Mão de Obra; (x) Locação ou Comodato; ( ) Aquisição de Equipamento; ( ) Aquisição de Materiais`;
  let t6 = `<br>O objeto do presente Memorial Descritivo (MD) é caracterizado pelas modalidades assinaladas  abaixo: ( ) Serviço; ( ) Consultoria; ( ) Licença; ( ) Mão de Obra; ( ) Locação ou Comodato; (x) Aquisição de Equipamento; ( ) Aquisição de Materiais`;
  let t7 = `<br>O objeto do presente Memorial Descritivo (MD) é caracterizado pelas modalidades assinaladas  abaixo: ( ) Serviço; ( ) Consultoria; ( ) Licença; ( ) Mão de Obra; ( ) Locação ou Comodato; ( ) Aquisição de Equipamento; (x) Aquisição de Materiais`;

  return (
    <div>
      <label><strong>{label}</strong></label><br />
      <label>
        <input
          type="radio"
          value="Serviço"
          checked={selectedOption === 'Serviço'}
          onChange={handleOptionChange}
        />
        Serviço
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Consultoria"
          checked={selectedOption === 'Consultoria'}
          onChange={handleOptionChange}
        />
        Consultoria
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Licença"
          checked={selectedOption === 'Licença'}
          onChange={handleOptionChange}
        />
        Licença
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Mão de obra"
          checked={selectedOption === 'Mão de obra'}
          onChange={handleOptionChange}
        />
        Mão de obra
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Locação ou Comodato"
          checked={selectedOption === 'Locação ou Comodato'}
          onChange={handleOptionChange}
        />
        Locação ou Comodato
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Aquisição de equipamento"
          checked={selectedOption === 'Aquisição de equipamento'}
          onChange={handleOptionChange}
        />
        Aquisição de equipamento
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Aquisição de Materiais"
          checked={selectedOption === 'Aquisição de Materiais'}
          onChange={handleOptionChange}
        />
        Aquisição de Materiais
      </label>
      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
    </div>
  );
}

export default Input002Modalidade1;
