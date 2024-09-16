import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFAQById } from '../../../services/FaqService';
import styles from './FAQDetail.module.css'; // Import CSS file

const FAQDetail = () => {
  const { id } = useParams(); // Get the FAQ id from the URL
  const [faq, setFaq] = useState(null);

  useEffect(() => {
    fetchFAQ();
  }, []);

  const fetchFAQ = async () => {
    try {
      const response = await getFAQById(id);
      setFaq(response.data);
    } catch (error) {
      console.error("Error fetching FAQ by ID", error);
    }
  };

  if (!faq) {
    return <p>Loading FAQ details...</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.fruitTitle}>{faq.fruit}</h2>
      <img src={faq.img_url} alt={faq.fruit} className={styles.faqImage} />
      <p className={styles.question}><strong>Question:</strong> {faq.question}</p>
      <p className={styles.answer}><strong>Answer:</strong> {faq.faq}</p>
    </div>
  );
};

export default FAQDetail;
