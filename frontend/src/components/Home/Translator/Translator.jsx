import React, { useState } from 'react';
import axios from 'axios';
import styles from './Translator.module.css';  // CSS module for styling

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('hi'); // Default to Hindi (hi)

  // Handle Translation via RapidAPI
  const handleTranslate = async () => {
    if (!inputText) {
      alert("Please enter some text to translate.");
      return;
    }

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", inputText); // Text to translate
    encodedParams.append("target", language); // Target language
    encodedParams.append("source", "auto"); // Automatically detect source language

    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      const translated = response.data.data.translations[0].translatedText;
      setTranslatedText(translated); // Update the translated text
    } catch (error) {
      console.error('Error translating text:', error);
      setTranslatedText("Translation failed. Please try again.");
    }
  };

  return (
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
      </select>

      {/* Translate Button */}
      <button className={styles.translate_button} onClick={handleTranslate}>
        Translate
      </button>

      {/* Translated Text Display */}
      {translatedText && (
        <div className={styles.translated_text}>
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
