import React, { useState, useEffect } from 'react';

function Input008ItensContratadosAbrangencia1({ onChange, label , Texto008ItensContratadosAbrangencia, onTexto008ItensContratadosAbrangenciaChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto008ItensContratadosAbrangenciaChange(tempValue);
  }, [tempValue, onTexto008ItensContratadosAbrangenciaChange]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
    setTempValue(getTexto(value));
  };

  const getTexto = (value) => {
    switch (value) {
      case 'Para planta de produção':
        return t1;
      case 'toda a área de influência da unidade':
        return t2;
      case 'não se aplica':
        return t3;
      default:
        return 'xxxxxxxxxxx';
    }
  };
  let t0 = `<br><br><strong><h2>4. ABRANGÊNCIA RESUMO DOS EMPREENDIMENTOS </h2></strong>`
  let tx = `<font color="red"><br><br><strong><h2>5. ESCOPO </h2></strong><br> ###################  Você pode editar diretamente por aqui #############################</font>`
  let t1 = t0.concat(`<br>Os itens contratados poderão ser acionados para as seguintes localidades das unidades: (x) Para planta de produção - Incluindo toda área do parque de produção e suas estruturas como Casas de Força, Edifícios de Controle, Subestações, Tomadas D'água, Vertedouros entre outras; ( ) Para toda a área de influência da unidade, incluindo municípios do entorno do reservatório ( ) Sem restrição de área, definição por requisitos específicos ou não aplicável.`).concat(tx);
  let t2 = t0.concat(`<br>Os itens contratados poderão ser acionados para as seguintes localidades das unidades: ( ) Para planta de produção - Incluindo toda área do parque de produção e suas estruturas como Casas de Força, Edifícios de Controle, Subestações, Tomadas D'água, Vertedouros entre outras; (x) Para toda a área de influência da unidade, incluindo municípios do entorno do reservatório ( ) Sem restrição de área, definição por requisitos específicos ou não aplicável.`).concat(tx);
  let t3 = t0.concat(`<br>Os itens contratados poderão ser acionados para as seguintes localidades das unidades: ( ) Para planta de produção - Incluindo toda área do parque de produção e suas estruturas como Casas de Força, Edifícios de Controle, Subestações, Tomadas D'água, Vertedouros entre outras; ( ) Para toda a área de influência da unidade, incluindo municípios do entorno do reservatório (x) Sem restrição de área, definição por requisitos específicos ou não aplicável.`).concat(tx);
 
  return (
    <div>
      <br />
      <label title='Os itens contratados poderão ser acionados para as seguintes localidades das unidades:'><strong>{label}</strong></label><br />
      <label title="Incluindo toda área do parque de produção e suas estruturas como Casas de Força, Edifícios de Controle, Subestações, Tomadas Dágua, Vertedouros entre outras">
        <input
          type="radio"
          value="Para planta de produção"
          checked={selectedOption === 'Para planta de produção'}
          onChange={handleOptionChange}
        />
        Para planta de produção
      </label>
      <br />

      <label title='incluindo municípios do entorno do reservatório'>
        <input
          type="radio"
          value="toda a área de influência da unidade"
          checked={selectedOption === 'toda a área de influência da unidade'}
          onChange={handleOptionChange}
        />
        toda a área de influência da unidade
      </label>
      <br />
      <label title='Sem restrição de área, definição por requisitos específicos ou não aplicável'>
        <input
          type="radio"
          value="não se aplica"
          checked={selectedOption === 'não se aplica'}
          onChange={handleOptionChange}
        />
        não se aplica
      </label>
      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
    </div>
  );
}

export default Input008ItensContratadosAbrangencia1;
