import React from 'react';
import '../../App.css';

function FruitCard({ fruit }) {
  return (
    <div className="fruit-card">
      <h3>{fruit.name}</h3>
      <p>Price: {fruit.price}</p>
      <p>{fruit.description}</p>
    </div>
  );
}

export default FruitCard;
