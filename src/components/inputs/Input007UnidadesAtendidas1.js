import React, { useState, useEffect } from 'react';

function Input007UnidadesAtendidas1({ onChange, label , Texto007UnidadesAtendidas, onTexto007UnidadesAtendidasChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [tempValue, setTempValue] = useState('');

  useEffect(() => {
    onTexto007UnidadesAtendidasChange(tempValue);
  }, [tempValue, onTexto007UnidadesAtendidasChange]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
    setTempValue(getTexto(value));
  };

  const getTexto = (value) => {
    switch (value) {
      case 'Aimorés':
        return t1;
      case 'Acauã':
        return t2;
      case 'Amador Aguiar I':
        return t3;
      case 'Amador Aguiar II':
        return t4;
      case 'Candonga':
        return t5;
      case 'Gravier':
        return t6;
      case 'Igarapava':
        return t7;
      case 'Porto Estrela':
        return t8;
      case 'Santo Inácio':
        return t9;
      case 'Sede':
        return t10;
      default:
        return 'xxxxxxxxxxx';
    }
  };

  let t1 = `<br><br>Complexo Eólico Acauã | 109,2MW | 26 Aerogeradores  Sítio Umarizeiro, S/n, Zona Rural, São Vicente/RN.  CEP: 59340-000 `;
  let t2 = `<br><br>UHE Aimorés | 330MW | 3 Unidades Geradoras | Rio Doce  Fazenda Viçosa, S/n, Distrito de Santo Antônio do Rio Doce, Aimorés/MG.  CEP: 35200-000`;
  let t3 = `<br><br>UHE Amador Aguiar I | 240 MW | 3 Unidades Geradoras | Rio Araguari   Fazenda Quilombo, S/n, Edifício de Controle da Casa de Força – 2º Andar, Sala 1, Zona Rural, Araguari /MG.   CEP: 38440-970`;
  let t4 = `<br><br>UHE Amador Aguiar II | 210 MW | 3 Unidades Geradoras | Rio Araguari  Fazenda Cunhas, S/n, Praia do Boi, Zona Rural l, Araguari/MG.  CEP: 38440-970`;
  let t5 = `<br><br>UHE Candonga | 140MW | 3 Unidades Geradoras | Rio Doce  Rodovia de acesso para Santana do Deserto, S/n, KM 12, Rio Doce/ MG.  CEP: 35442-000`;
  let t6 = `<br><br>Central Eólica Gravier | 71,4MW | 17 Aerogeradores  Rua 19, S/n, letra E, Praia do Ceará, Icapuí/CE.  CEP: 62810-000`;
  let t7 = `<br><br>UHE Igarapava | 210MW | 5 Unidades Geradoras | Rio Grande  Rodovia BR 050, Km 208, Fazenda Ribalta, S/n, Zona Rural, Conquista/MG.  CEP: 38195-000`;
  let t8 = `<br><br>UHE Porto Estrela | 112MW | 2 Unidades Geradoras | Rio Santo Antonio  Serra da Estrela, S/n, Zona Rural, Joanésia/MG.  CEP: 35168-000`;
  let t9 = `<br><br>Complexo Eólico Santo Inácio (CESI) | 98,7 MW | 47 Aerogeradores  Rua 19, S/n, Parte D, Praia do Ceará – Icapuí/CE.  CEP: 62810-000`;
  let t10 = `<br><br>Sede Administrativa Aliança Energia  Rua Matias Cardoso, 169 – 9º andar, Santo Agostinho, Belo Horizonte/MG.  CEP: 30170-050`;
  
  return (
    <div>
      <label><strong>{label}</strong></label><br />
      <label>
        <input
          type="radio"
          value="Acauã"
          checked={selectedOption === 'Acauã'}
          onChange={handleOptionChange}
        />
        Acauã
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Aimorés"
          checked={selectedOption === 'Aimorés'}
          onChange={handleOptionChange}
        />
        Aimorés
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Amador Aguiar I"
          checked={selectedOption === 'Amador Aguiar I'}
          onChange={handleOptionChange}
        />
        Amador Aguiar I
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Amador Aguiar II"
          checked={selectedOption === 'Amador Aguiar II'}
          onChange={handleOptionChange}
        />
        Amador Aguiar II
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Candonga"
          checked={selectedOption === 'Candonga'}
          onChange={handleOptionChange}
        />
        Candonga
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Gravier"
          checked={selectedOption === 'Gravier'}
          onChange={handleOptionChange}
        />
        Gravier
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Igarapava"
          checked={selectedOption === 'Igarapava'}
          onChange={handleOptionChange}
        />
        Igarapava
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Porto Estrela"
          checked={selectedOption === 'Porto Estrela'}
          onChange={handleOptionChange}
        />
        Porto Estrela
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Santo Inácio"
          checked={selectedOption === 'Santo Inácio'}
          onChange={handleOptionChange}
        />
        Santo Inácio
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="Sede"
          checked={selectedOption === 'Sede'}
          onChange={handleOptionChange}
        />
        Sede
      </label>
      <br />

      <p style={{ display: 'none' }}>opção selecionada: {selectedOption}</p>
      </div>
  );
}

export default Input007UnidadesAtendidas1;
