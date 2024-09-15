import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="logo">
        {/* Placeholder for the blurred letters */}
        <span className="blur-letter">F</span>
        <span className="blur-letter">F</span>
        <span className="blur-letter">F</span>
      </div>
      <div className="about-background">
        <div className="about-content">
          <h1>Fruit.Ai</h1>
          <p>
            Whether you're looking to discover new fruits, understand their nutritional values, 
            or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. 
            We provide personalized fruit recommendations tailored to your health needs, 
            making it easier for you to integrate the best fruits into your daily routine.
          </p>
          <button className="about-button">About</button>
        </div>
      </div>
    </div>
  );
}

export default About;
