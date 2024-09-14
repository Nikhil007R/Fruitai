// FAQ.js
import React, { useState, useEffect } from 'react';
// import faqService from '../services/faqService';

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState('');

//   useEffect(() => {
//     faqService.getFaqs().then(setFaqs);
//   }, []);

//   const addFaq = () => {
//     faqService.addFaq({ question: newFaq }).then(() => {
//       setFaqs([...faqs, { question: newFaq }]);
//       setNewFaq('');
//     });
//   };

  return (
    <div>
      <h2>FAQs</h2>
      {/* <ul>
        {faqs.map((faq, idx) => (
          <li key={idx}>{faq.question}</li>
        ))}
      </ul>
      <input value={newFaq} onChange={(e) => setNewFaq(e.target.value)} />
      <button onClick={addFaq}>Add FAQ</button> */}
    </div>
  );
}

export default Faq;
