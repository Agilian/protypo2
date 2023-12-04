import React from 'react';
import html2pdf from 'html2pdf.js';

class ComponenteParaImprimir extends React.Component {
  imprimirOuSalvarPDF = () => {
    const elementoParaImprimir = document.getElementById('divParaImprimir');

    if (elementoParaImprimir) {
      const opcoesPDF = {
        margin: 10,
        filename: 'documento.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      html2pdf().from(elementoParaImprimir).set(opcoesPDF).outputPdf();
    }
  };

  render() {
    return (
      <div>
        <div id="divParaImprimir">
          {/* Conteúdo da sua div aqui */}
          <p>Conteúdo a ser impresso ou salvo como PDF.</p>
        </div>
        <button onClick={this.imprimirOuSalvarPDF}>Imprimir ou Salvar como PDF</button>
      </div>
    );
  }
}

export default ComponenteParaImprimir;
