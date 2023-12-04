import React, { useState, useEffect , useRef } from 'react';
import Input001Titulo from './components/inputs/Input001Titulo';
import Input002Modalidade1 from './components/inputs/Input002Modalidade1';
import Input003Vigencia from './components/inputs/Input003Vigencia';
import Input004VigenciaStart1 from './components/inputs/Input004VigenciaStart1';
import Input005Tipo1 from './components/inputs/Input005Tipo1';
import Input006Execucao1 from './components/inputs/Input006Execucao1';
import Input007UnidadesAtendidas1 from './components/inputs/Input007UnidadesAtendidas1';
import Input008ItensContratadosAbrangencia1 from './components/inputs/Input008ItensContratadosAbrangencia1';
import TextEditor from './components/TextEditor';
import Input009Materiais from './components/inputs/Input009Materiais';
import Input010MateriaisInclusao from './components/inputs/Input010MateriaisInclusao';
import Papa from 'papaparse';
import { htmlToText } from 'html-to-text';
import { EditorState } from 'draft-js';
import { PDFDocument, rgb } from 'pdf-lib';
import jsPDF from 'jspdf';
import Input011MateriaisInclusaoFrete from './components/inputs/Input011MateriaisInclusaoFrete';
import Input012Atividades from './components/inputs/Input012Atividades';
import Input013AtividadesCronograma from './components/inputs/Input013AtividadesCronograma';
import Input014AtividadesAprova from './components/inputs/Input014AtividadesAprova';
import ComponenteParaImprimir from './ComponenteParaImprimir';
import DivToImage from './DivToImage';

const useTextState = (initialValue, stateName) => {
  const [state, setState] = useState(initialValue);
  const onChange = (newValue) => {
    setState(newValue);
    console.log(`${stateName}:`, newValue);
  };
  return [state, onChange];
};

const Formulario = () => {
  const [inputs, setInputs] = useState({
    input1: '', input2: '', input3: '', input4: '', input5: '', input6: '', input7: '',
    input8: '', input9: '', input10: '', input11: '',
  });

  const handleInputChange = (inputName, value) => {
    setInputs((prevInputs) => ({...prevInputs, [inputName]: value, }));
  };

  const troca = (inputNumber, value) => { handleInputChange(`input${inputNumber}`, value); };

  const [editorValue, setEditorValue] = useState('.')
  const handleEditorChange = (value) => { setEditorValue(value) }
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const updateEditorState = (newEditorState) => { setEditorState(newEditorState) }

  const GERAR = (e) => {
    e.preventDefault();
    let newText = Texto001Titulo.concat(Texto002Modalidade.concat(Texto003Vigencia.concat(Texto004VigenciaStart.concat(Texto005Tipo.concat(Texto006Execucao.concat(Texto008ItensContratadosAbrangencia.concat(Texto007UnidadesAtendidas.concat(Texto009Materiais.concat(Texto010MateriaisInclusao.concat(Texto011MateriaisInclusaoFrete.concat(Texto012Atividades.concat(Texto013AtividadesCronograma.concat(Texto014AtividadesAprova.concat(htmlDaTabela))))))))))))))
    setEditorValue(newText); // Altere o estado diretamente
    setExibirComponente(true);
  };

  const [Texto001Titulo, setTexto001Titulo] = useState('xxxxxxxxxxx');
  const onTexto001TituloChange = (novoValor) => { setTexto001Titulo(novoValor) };
  const [Texto002Modalidade, mudouTexto002ModalidadeChange] = useTextState('xxxxxxxxxxx', 'Texto002Modalidade');
  const [Texto003Vigencia, mudouTexto003VigenciaChange] = useTextState('xxxxxxxxxxx', 'Texto003Vigencia');
  const [Texto009Materiais, mudouTexto009MateriaisChange] = useTextState('xxxxxxxxxxx', 'Texto009Materiais');
  const [Texto008ItensContratadosAbrangencia, mudouTexto008ItensContratadosAbrangenciaChange] = useTextState('xxxxxxxxxxx', 'Texto008ItensContratadosAbrangencia');
  const [Texto004VigenciaStart, mudouTexto004VigenciaStartChange] = useTextState('xxxxxxxxxxx', 'Texto004VigenciaStart');
  const [Texto005Tipo, mudouTexto005TipoChange] = useTextState('xxxxxxxxxxx', 'Texto005Tipo');
  const [Texto006Execucao, mudouTexto006ExecucaoChange] = useTextState('xxxxxxxxxxx', 'Texto006Execucao');
  const [Texto007UnidadesAtendidas, mudouTexto007UnidadesAtendidasChange] = useTextState('xxxxxxxxxxx', 'Texto007UnidadesAtendidas');
  const [Texto010MateriaisInclusao, mudouTexto010MateriaisInclusaoChange] = useTextState('xxxxxxxxxxx', 'Texto010MateriaisInclusao');
  const [Texto011MateriaisInclusaoFrete, mudouTexto011MateriaisInclusaoFreteChange] = useTextState('xxxxxxxxxxx', 'Texto011MateriaisInclusaoFrete');
  const [Texto012Atividades, mudouTexto012AtividadesChange] = useTextState('xxxxxxxxxxx', 'Texto012Atividades');
  const [Texto013AtividadesCronograma, mudouTexto013AtividadesCronogramaChange] = useTextState('xxxxxxxxxxx', 'Texto013AtividadesCronograma');
  const [Texto014AtividadesAprova, mudouTexto014AtividadesAprovaChange] = useTextState('xxxxxxxxxxx', 'Texto014AtividadesAprova');
 
  useEffect(() => {
    console.log('inputs:', inputs);
    console.log('Texto001Titulo:', Texto001Titulo);
    console.log('Texto002Modalidade:', Texto002Modalidade);
    console.log('Texto003Vigencia:', Texto003Vigencia);
    console.log('Texto009Materiais:', Texto009Materiais);
    console.log('Texto008ItensContratadosAbrangencia:', Texto008ItensContratadosAbrangencia);
    console.log('Texto004VigenciaStart:', Texto004VigenciaStart);
    console.log('Texto005Tipo:', Texto005Tipo);
    console.log('Texto006Execucao:', Texto006Execucao);
    console.log('Texto007UnidadesAtendidas:', Texto007UnidadesAtendidas);
    console.log('Texto010MateriaisInclusao:', Texto010MateriaisInclusao);
    console.log('Texto011MateriaisInclusaoFrete:', Texto011MateriaisInclusaoFrete);
    console.log('Texto012Atividades:', Texto012Atividades);
    console.log('Texto013AtividadesCronograma:', Texto013AtividadesCronograma);
    console.log('Texto014AtividadesAprova:', Texto014AtividadesAprova);
  }, [inputs, Texto001Titulo, Texto002Modalidade, Texto003Vigencia, Texto009Materiais, 
    Texto008ItensContratadosAbrangencia, Texto004VigenciaStart, Texto005Tipo,
    Texto006Execucao, Texto007UnidadesAtendidas, Texto010MateriaisInclusao,
    Texto011MateriaisInclusaoFrete, Texto012Atividades, Texto013AtividadesCronograma, Texto014AtividadesAprova]);

const generatePDF = () => {
  const doc = new jsPDF();
  const margin = 10;
  const pageWidth = doc.internal.pageSize.width - margin;
  const lineHeight = 8;
  const paragraphSpacing = -6;
  const headerImageURL = process.env.PUBLIC_URL + '/cabecario.png';
  const footerImageURL = process.env.PUBLIC_URL + '/rodape.png'; // Substitua pelo caminho da sua imagem de rodapé
  const imageWidth = 0.9 * pageWidth;
  const imageHeight = 12;
  const footerHeight = 10; // Ajuste conforme necessário
  const fontSize = 10;

  // Use htmlToText para converter HTML em texto simples
  const textContent = htmlToText(editorValue, {
    wordwrap: false,
    ignoreHref: true,
  });

  // Adiciona o cabeçalho de imagem e o rodapé na primeira página
  doc.addImage(headerImageURL, 'PNG', margin, margin, imageWidth, imageHeight);
  doc.addImage(footerImageURL, 'PNG', margin, doc.internal.pageSize.height - margin - footerHeight, pageWidth * 0.9, footerHeight);

  // Adiciona o segundo cabeçalho no canto direito da página, sobrepondo o cabeçalho de imagem
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  const secondHeader = formattedDate;
  const secondHeaderWidth = doc.getStringUnitWidth(secondHeader) * 6; // Calcula a largura do texto em pontos
  const secondHeaderX = pageWidth - margin - secondHeaderWidth - 3;
  doc.text(secondHeader, secondHeaderX, margin + 10);

  // Inicia yPos considerando a altura do cabeçalho de imagem
  let yPos = margin + lineHeight + imageHeight;

  const paragraphs = textContent.split('\n');

  paragraphs.forEach((paragraph) => {
    // Verifica se adicionar este parágrafo excede a altura da página
    if (yPos + lineHeight > doc.internal.pageSize.height - margin - footerHeight) {
      // Adiciona uma nova página
      doc.addPage();

      // Adiciona o cabeçalho de imagem e o rodapé à nova página
      doc.addImage(headerImageURL, 'PNG', margin, margin, imageWidth, imageHeight);
      doc.addImage(footerImageURL, 'PNG', margin, doc.internal.pageSize.height - margin - footerHeight, pageWidth, footerHeight);

      // Adiciona o segundo cabeçalho à nova página
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(secondHeader, secondHeaderX, margin + 10);

      yPos = margin + lineHeight + imageHeight; // Reseta yPos para a nova página
    }

    const lines = doc.splitTextToSize(paragraph, pageWidth - 20);
    lines.forEach((line) => {
      doc.setFontSize(fontSize);
      doc.text(line, margin, yPos);
      yPos += lineHeight;
    });

    // Adiciona espaço entre parágrafos
    yPos += paragraphSpacing;
  });

  // Adiciona a imagem convertida diretamente ao PDF
  if (imagemGerada) {
    const img = new Image();
    img.src = imagemGerada;
    doc.addImage(img, 'PNG', margin, yPos, imageWidth, imageHeight);
  }

  // Salva o PDF
  doc.save('output.pdf');
};

    
    
    
    
    
    
  const [exibirComponente, setExibirComponente] = useState(false);
  const esconderComponente = () => {
      setExibirComponente(false);
  };

    const [csvData, setCsvData] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const handleFileUpload = (e) => {
      const file = e.target.files[0];
  
      Papa.parse(file, {
        complete: (result) => {
          setCsvData(result.data);
          setShowTable(true);
        },
        header: true, // Se o arquivo CSV tiver cabeçalho
      });
    };
  
    const tableRef = useRef(null);
    useEffect(() => {
      const generateTableHTML = () => {
        if (tableRef.current) {
          const tableHTML = tableRef.current.outerHTML;
          sethtmlDaTabela(tableHTML)
        }
      };
  
      // Chama a função após a renderização da tabela
      generateTableHTML();
    }, [csvData]);

    const [htmlDaTabela, sethtmlDaTabela] = useState('');

  const updateEditor = (newContent) => {
    setEditorValue(newContent);
  };
  const [imagemGerada, setImagemGerada] = useState(null);

  return (
        <form id='form1' onSubmit={GERAR}>
          <Input001Titulo label="" value={inputs.input1} onChange={(value) => handleInputChange('input1', value)} Texto001Titulo={Texto001Titulo} onTexto001TituloChange={onTexto001TituloChange} />
          <div id='container'>
          <div id='col1'>
            <Input002Modalidade1  onChange={(value) => troca(2, value)} label="Modalidade" Texto002Modalidade={Texto002Modalidade} onTexto002ModalidadeChange={mudouTexto002ModalidadeChange} />
            <Input003Vigencia label="Vigência de" value={inputs.input3} onChange={(value) => handleInputChange('input3', value)} Texto003Vigencia={Texto003Vigencia} onTexto003VigenciaChange={mudouTexto003VigenciaChange} />
            <Input004VigenciaStart1 onChange={(value) => troca(4, value)}  label="" Texto004VigenciaStart={Texto004VigenciaStart} onTexto004VigenciaStartChange={mudouTexto004VigenciaStartChange} />
            <Input005Tipo1 onChange={(value) => troca(5, value)}  label="Tipo do Objeto:" Texto005Tipo={Texto005Tipo} onTexto005TipoChange={mudouTexto005TipoChange} />
            {inputs.input5 === 'Firme sem recorrência' ? (
              <Input006Execucao1 onChange={(value) => troca(6, value)}  label="Execução..." Texto006Execucao={Texto006Execucao} onTexto006ExecucaoChange={mudouTexto006ExecucaoChange} />            ) : (<p></p> )
            }
            <Input007UnidadesAtendidas1 onChange={(value) => troca(7, value)}  label="Unidades atendidas:" Texto007UnidadesAtendidas={Texto007UnidadesAtendidas} onTexto007UnidadesAtendidasChange={mudouTexto007UnidadesAtendidasChange} />
            <Input008ItensContratadosAbrangencia1 onChange={(value) => troca(8, value)}  label="Abrangência" Texto008ItensContratadosAbrangencia={Texto008ItensContratadosAbrangencia} onTexto008ItensContratadosAbrangenciaChange={mudouTexto008ItensContratadosAbrangenciaChange} />
            
          </div>
          <div id='col2'>
            <div id='escopo'><br />
              <label><strong>Escopo:</strong></label><br />    
            </div>
            <p>.</p>
            <Input009Materiais onChange={(value) => troca(9, value)}  label="Usa algum material?" Texto009Materiais={Texto009Materiais} onTexto009MateriaisChange={mudouTexto009MateriaisChange} />
            {inputs.input9 === 'sim' && (
              <Input010MateriaisInclusao onChange={(value) => troca(10, value)}  label="Foi combinado que o material..." Texto010MateriaisInclusao={Texto010MateriaisInclusao}  onTexto010MateriaisInclusaoChange={mudouTexto010MateriaisInclusaoChange} /> )}
            {inputs.input9 === 'sim' && inputs.input10 === 'seria comprado a parte' && (inputs.input2 === 'Serviço' || inputs.input2 === 'Consultoria' || inputs.input2 === 'Mão de obra') && (
              <Input011MateriaisInclusaoFrete onChange={(value) => troca(11, value)}  label="...e o responsável pelo frete é:" Texto011MateriaisInclusaoFrete={Texto011MateriaisInclusaoFrete} onTexto011MateriaisInclusaoFreteChange={mudouTexto011MateriaisInclusaoFreteChange} /> )}
            <Input012Atividades  onChange={(value) => troca(12, value)} label="(dentro dos prazos) Quem decide as datas?" Texto012Atividades={Texto012Atividades} onTexto012AtividadesChange={mudouTexto012AtividadesChange} />
            <Input013AtividadesCronograma  onChange={(value) => troca(13, value)} label="Exige Cronograma de Atividades?" Texto013AtividadesCronograma={Texto013AtividadesCronograma} onTexto013AtividadesCronogramaChange={mudouTexto013AtividadesCronogramaChange} />
            {((inputs.input2 === 'Serviço' || inputs.input2 === 'Consultoria' || inputs.input2 === 'Mão de obra') && (
              <Input014AtividadesAprova onChange={(value) => troca(14, value)} label="Quem aprova o cronograma da contratada" Texto014AtividadesAprova={Texto014AtividadesAprova} onTexto014AtividadesAprovaChange={mudouTexto014AtividadesAprovaChange} />))}

          </div>
          <div id='col3'>
          <div id='divTabela'>
            <input type="file" onChange={handleFileUpload} />
            {showTable && (
              <table ref={tableRef} style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr>
                    {Object.keys(csvData[0]).map((header, index) => (
                      <th key={index} style={{ border: '1px solid black', padding: '8px' }}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, index) => (
                        <td key={index} style={{ border: '1px solid black', padding: '8px' }}>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            
    </div>
    <DivToImage divId= 'divTabela' updateEditor={updateEditor}/>
          </div>

          <div id='col4'>
            
            <button id='btEnviar' onClick={GERAR} >OK</button>
          </div>

    </div>
    {exibirComponente && (
    <div id='gerado'>
      <button onClick={esconderComponente} id='btFechar'>x</button>
      <div id='centralizado'>
      <TextEditor value={editorValue} onChange={handleEditorChange} imagemGerada={imagemGerada} />


        <div id='col4'>
        <button id='btGerarPDF' onClick={generatePDF}>Gerar PDF</button>
      </div>
      </div>
      
    </div>
    )}
    
    </form>
    
  );
};

export default Formulario;
