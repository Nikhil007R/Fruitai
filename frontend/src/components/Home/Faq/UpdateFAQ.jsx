import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFAQs, updateFAQ } from '../../../services/FaqService';
import styles from './UpdateFAQ.module.css';  // Import the CSS module

const UpdateFAQ = () => {
  const { id } = useParams();  // Get FAQ ID from URL
  const [faq, setFaq] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadFAQ();
  }, []);

  const loadFAQ = async () => {
    try {
      const response = await getFAQs();
      const faqToUpdate = response.data.find((faq) => faq.id === parseInt(id));
      setFaq(faqToUpdate);
    } catch (error) {
      console.error("Error loading FAQ", error);
    }
  };

  const handleInputChange = (e) => {
    setFaq({
      ...faq,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateFAQ = async (e) => {
    e.preventDefault();
    try {
      await updateFAQ(id, faq);
      navigate('/faq');  // Redirect to FAQ list after update
    } catch (error) {
      console.error("Error updating FAQ", error);
    }
  };

  return (
    faq && (
      <div className={styles.container}>
        <h2 className={styles.updateh2}>Update FAQ</h2>
        <form onSubmit={handleUpdateFAQ}>
          <input
            type="text"
            name="fruit"
            value={faq.fruit}
            onChange={handleInputChange}
            placeholder="Fruit"
            className={styles.updateinput}
          />
          <input
            type="text"
            name="question"
            value={faq.question}
            onChange={handleInputChange}
            placeholder="Question"
            className={styles.updateinput}

          />
          <textarea
            name="faq"
            value={faq.faq}
            onChange={handleInputChange}
            placeholder="FAQ Answer"

          />
          <input
            type="text"
            name="img_url"
            value={faq.img_url}
            onChange={handleInputChange}
            placeholder="Image URL"
            className={styles.updateinput}
          />
          <button className={styles.updatebtn} type="submit">Update FAQ</button>
        </form>
      </div>
    )
  );
};

export default UpdateFAQ;
