// Chatbot.js
import React from 'react';
// import FruitCard from './FruitCard';
import '../../../App.css';


const fruits = [
  { name: 'Orange', price: '$2.00', description: 'Great source of Vitamin C.' },
  { name: 'Tangerine', price: '$1.50', description: 'Supports immune health.' },
  // Add more fruits
];

function Chatbot() {
  return (
    <div className="chatbot-container">
      <h2>Fruit Chat</h2>
      {/* <div className="fruit-list">
        {fruits.map((fruit) => (
          <FruitCard key={fruit.name} fruit={fruit} />
        ))}
      </div> */}
    </div>
  );
}

export default Chatbot;
