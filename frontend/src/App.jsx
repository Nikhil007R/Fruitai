import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Chatbot from './components/Home/ChatBot/ChatBot';
import Faq from './components/Home/Faq/FAQList';
import Translator from './components/Home/Translator/Translator';
import About from './components/Home/About/About';

import AddFAQ from './components/Home/Faq/AddFAQ';
import UpdateFAQ from './components/Home/Faq/UpdateFAQ';
import DeleteFAQ from './components/Home/Faq/DeleteFAQ';
import FAQDetail from './components/Home/Faq/FAQDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/translator" element={<Translator />} />

        <Route path="/faq" element={<Faq />} /> {/* FAQ List Page */}
        <Route path='/faq/:id' element={<FAQDetail/>}/>
        <Route path="faq/add" element={<AddFAQ />} /> {/* Add FAQ Page */}
        <Route path="faq/update/:id" element={<UpdateFAQ />} /> {/* Update FAQ Page */}
        <Route path="faq/delete/:id" element={<DeleteFAQ />} /> {/* Delete FAQ Page */}

        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
