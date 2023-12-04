import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
const DivToImage = ({ divId, updateEditor }) => {
    const divRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);
  
    const convertToImage = async () => {
      const div = document.getElementById(divId);
  
      try {
        const canvas = await html2canvas(div);
        const dataURL = canvas.toDataURL('image/png');
        setImageSrc(dataURL);
        
        // Adiciona a imagem ao editor após a conversão
        adicionarImagemAoEditor(dataURL);
      } catch (error) {
        console.error('Erro ao converter div em imagem:', error);
      }
    };
  
    const adicionarImagemAoEditor = (dataURL) => {
      updateEditor((prevEditorValue) => {
        return `${prevEditorValue}<img src="${dataURL}" alt="Imagem Convertida" />`;
      });
    };
  
    return (
      <div>
        <div id={divId} ref={divRef}>
          {/* Conteúdo da div */}
          <p>Sua div</p>
        </div>
        <button onClick={convertToImage}>Converter para Imagem</button>
  
        {imageSrc && (
          <div>
            <p>Imagem convertida:</p>
            <img src={imageSrc} alt="Imagem convertida" />
          </div>
        )}
      </div>
    );
  };
  export default DivToImage;