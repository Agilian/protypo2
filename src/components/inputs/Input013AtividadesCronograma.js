import React, { useState, useEffect } from 'react';

function Input013AtividadesCronograma({ onChange, label , Texto013AtividadesCronograma, onTexto013AtividadesCronogramaChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto013AtividadesCronogramaChange(tempValue);
  }, [tempValue, onTexto013AtividadesCronogramaChange]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
    setTempValue(getTexto(value));
  };

  const getTexto = (value) => {
    switch (value) {
      case 'sim. simples':
        return t1;
      case 'sim, em Software de planejamento':
        return t2;
      default:
        return 'xxxxxxxxxxx';
    }
  };

  let t1 = `<br>8.4. Previamente às atividades a CONTRATADA deverá elaborar cronograma e histograma para execução das atividades contendo minimamente as etapas e as respectivas datas de início e fim das atividades;`;
  let t2 = `<br>8.4. A CONTRATADA deverá elaborar CRONOGRAMA detalhado em arquivo de extensão "mpp" (Compatível com MS Project) contemplando relação entre as atividades, datas de início, duração, datas de conclusão, recursos de pessoal, recursos materiais, bem como quaisquer outras informações necessárias ao acompanhamento da evolução dos trabalhos;`;
  
  return (
    <div>
      <label><strong>{label}</strong></label><br />
      <label>
        <input
          type="radio"
          value="sim. simples"
          checked={selectedOption === 'sim. simples'}
          onChange={handleOptionChange}
        />
        sim. simples
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="sim, em Software de planejamento"
          checked={selectedOption === 'sim, em Software de planejamento'}
          onChange={handleOptionChange}
        />
        sim, em Software de planejamento
      </label>
      <br />
      
      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
    </div>
  );
}

export default Input013AtividadesCronograma;
