import React, { useState, useEffect } from 'react';

function Input011MateriaisInclusaoFrete({ onChange, label, Texto011MateriaisInclusaoFrete, onTexto011MateriaisInclusaoFreteChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto011MateriaisInclusaoFreteChange(tempValue);
  }, [tempValue, onTexto011MateriaisInclusaoFreteChange]);
  let t0 = `<br><br><strong><h2>7. CONDIÇÕES DE FRETE RECEBIMENTO E DEVOLUÇÃO</h2></strong>`
  let t1 = t0.concat(`<br><p>O recebimento do frete de um material não valida a sua conformidade técnica;</p>
  <br><p>Sendo constatada alguma inconformidade nos materiais, a CONTRATADA deve providenciar a substituição dos itens não conformes, assumindo as providências e custos extras de fretes em função da substituição</p>.
  <p>O frete do material será de responsabilidade da CONTRATANTE;</p>
  <br><p>A CONTRATADA deverá informar as datas autorizadas para a coleta dos materiais, bem como os horários e demais condições a serem observadas;</p>
  <p>Os materiais de uma mesma Ordem de Compra (OC) ou outro documento equivalente devem ser integralmente disponibilizados para coleta única, salvo impedimento de ordem técnica que deverá ser previamente evidenciado. Também sob consulta prévia a CONTRATADA poderá autorizar o particionamento dos volumes de coleta.</p> `);
  let t2 = t0.concat(`<p>O frete do material será de responsabilidade da CONTRATADA;</p>
  <br><p>A CONTRATADA deverá consultar previamente a CONTRATANTE sobre os dias e horários autorizados para entrega. Entregas fora dos períodos autorizados poderão ser recusadas sem ônus para a CONTRATANTE;</p>
  <p>Os veículos de entrega e seus condutores, quando necessitarem de acesso às dependências da CONTRATANTE, devem possuir documentação regular perante a legislação e o Código de Trânsito Brasileiro, bem como ter todos os itens de segurança em plenas condições de funcionamento;</p>
  <p>Não será autorizado o acesso de pessoas às dependências da CONTRATANTE, sem uso de calças compridas e calçados fechados.</p>`);
 

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);

    switch (value) {
      case 'a Aliança':
        setTempValue(t1);
        break;
      case 'o Fornecedor':
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
          value="o Fornecedor"
          checked={selectedOption === 'o Fornecedor'}
          onChange={handleOptionChange}
        />
        o Fornecedor
      </label>
      <br />
      <br />
      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
    </div>
  );
}

export default Input011MateriaisInclusaoFrete;
