import React, { useState } from 'react';
import '../../../App.css';


function Translator() {
  const [input, setInput] = useState('');
  const [translatedText, setTranslatedText] = useState('');

//   const handleTranslate = () => {
//     // Dummy translation function
//     setTranslatedText(`Translated: ${input}`);
//   };

  return (
    <div className="translator-container">
      <h2>Translator</h2>
      <input
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* <button onClick={handleTranslate}>Translate</button> */}
      <p>{translatedText}</p>
    </div>
  );
}

export default Translator;
