import React, { useState } from 'react';
import axios from 'axios';
import styles from './Translator.module.css'; // Assuming you have CSS modules for styling
import Loader from '../../Loader/Loader';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('Please wait...');
  const [language, setLanguage] = useState('es'); // Default to Spanish (es)

  // Function to handle translation using Deep Translate API
  const handleTranslate = async () => {
    if (!inputText) {
      alert('Please enter some text to translate.');
      return;
    }

    const options = {
      method: 'POST',
      url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'x-rapidapi-key': '396d6731c0msheafb766d0ea2c30p121d70jsn82226f0241e1', // Replace with your actual API key
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        q: inputText,
        source: 'auto', // Auto-detect source language
        target: language, // Selected target language
      },
    };

    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.data.translations.translatedText); // Update translated text
    } catch (error) {
      console.error('Error translating text:', error);
      setTranslatedText('Translation failed. Please try again.');
    }
  };

  return (

    <>
      <div className={styles.translator_container}>
        <h1>Translate to Regional Language</h1>

        {/* Input Text Area */}
        <textarea
          className={styles.input_area}
          placeholder="Enter text to translate..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        {/* Language Dropdown */}
        <select
          className={styles.language_selector}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="mr">Marathi</option>
          <option value="gu">Gujarati</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>

        {/* Translate Button */}
        <button className={styles.translate_button} onClick={handleTranslate}>
          Translate
        </button>

        {/* Translated Text Display */}
        {!translatedText && (
          <div><Loader/></div>
        )}
        {translatedText && (
          <div className={styles.translated_text}>
            <h2>Translated Text:</h2>
            <p>{translatedText}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Translator;
