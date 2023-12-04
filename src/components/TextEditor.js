//TextEditor.js
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value, onChange, imagemGerada }) => {
  const handleEditorChange = (content) => {
    onChange(content);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            ['bold', 'underline'],
            [{ header: 1 }, { header: 2 }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }],
            [{ align: [] }],
            [{ insertPageBreak: 'Insert Page Break' }],
          ],
        }}
      />
      {imagemGerada && <img src={imagemGerada} alt="Imagem Convertida" />}
    </div>
  );
};

export default TextEditor;