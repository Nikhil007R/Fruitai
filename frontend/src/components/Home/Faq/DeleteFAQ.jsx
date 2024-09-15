import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFAQs, deleteFAQ } from '../../../services/FaqService';
import styles from './DeleteFAQ.module.css';  // Import the CSS module

const DeleteFAQ = () => {
  const { id } = useParams();
  const [faq, setFaq] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadFAQ();
  }, []);

  const loadFAQ = async () => {
    try {
      const response = await getFAQs();
      const faqToDelete = response.data.find((faq) => faq.id === parseInt(id));
      setFaq(faqToDelete);
    } catch (error) {
      console.error("Error loading FAQ", error);
    }
  };

  const handleDeleteFAQ = async () => {
    try {
      await deleteFAQ(id);
      navigate('/faq');  // Redirect to FAQ list after delete
    } catch (error) {
      console.error("Error deleting FAQ", error);
    }
  };

  return (
    faq && (
      <div className={styles.container}>
        <h2 className={styles.deleteh2}>Delete FAQ</h2>
        <p className={styles.deletep}>Are you sure you want to delete this FAQ?</p>
        <p className={styles.deletep}>{faq.fruit} - {faq.question}</p>
        <button className={styles.deletebtn} onClick={handleDeleteFAQ}>Delete</button>
      </div>
    )
  );
};

export default DeleteFAQ;
