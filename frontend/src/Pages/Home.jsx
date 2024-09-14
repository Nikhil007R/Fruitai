// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Fruit.AI</h1>
      <div className="services">
        <div>
          <Link to="/chatbot">Chatbot</Link>
        </div>
        <div>
          <Link to="/translator">Translator</Link>
        </div>
        <div>
          <Link to="/faq">FAQ</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
