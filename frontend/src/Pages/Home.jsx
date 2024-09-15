import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import styles from './Home.module.css'; // Import the CSS module
import '../App.css'
import { MdGTranslate } from "react-icons/md";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.homeContainer}>
        <div className={styles.header}>
          <h1>Fruit.Ai</h1>
          <p>"Be Healthy!"</p>
        </div>

        <div className={styles.buttonGrid} >
          {/* Link to Chatbot */}
          <div className={`${styles.button} ${styles.chat}`}>
            <Link to="/chatbot" className={`${styles.buttonLink}`} style={{color: "#C84AD3"}}>
              Chat.
            </Link>
          </div>

          {/* Link to Translator */}
          <div className={`${styles.button} ${styles.translate}`}>
            <Link to="/translator" className={styles.buttonLink}>
              <MdGTranslate className={styles.image}/>
            </Link>
          </div>

          {/* Link to FAQ */}
          <div className={`${styles.button} ${styles.faqs} `}>
            <Link to="/faq" className={`${styles.buttonLink} faqs`}>
              FAQs
            </Link>
          </div>

          {/* Link to About */}
          <div className={`${styles.button} ${styles.about} `}>
            <Link to="/about" style={{color: "#C84AD3"}} className={styles.buttonLink}>
              About
            </Link>
          </div>  
        </div>

        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
