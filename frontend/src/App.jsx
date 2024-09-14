import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Chatbot from './components/Home/ChatBot/ChatBot';
import Faq from './components/Home/Faq/Faq';
import Translator from './components/Home/Translator/Translator';
import About from './components/Home/About/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
