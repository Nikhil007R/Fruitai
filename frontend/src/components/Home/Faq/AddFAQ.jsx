// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { addFAQ } from '../../../services/FaqService';
// import styles from './AddFAQ.module.css';

// const AddFAQ = () => {
//   const [newFaq, setNewFaq] = useState({
//     fruit: '',
//     question: '',
//     faq: '',
//     img_url: ''
//   });
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setNewFaq({
//       ...newFaq,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleAddFAQ = async (e) => {
//     e.preventDefault();
//     try {
//       await addFAQ(newFaq);
//       navigate('/faq');  // Redirect to FAQ list after adding
//     } catch (error) {
//       console.error("Error adding FAQ", error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2>Add New FAQ</h2>
//       <form onSubmit={handleAddFAQ}>
//         <input
//           type="text"
//           name="fruit"
//           value={newFaq.fruit}
//           onChange={handleInputChange}
//           placeholder="Fruit"
//           className={styles.input}
//         />
//         <input
//           type="text"
//           name="question"
//           value={newFaq.question}
//           onChange={handleInputChange}
//           placeholder="Question"
//           className={styles.input}
//         />
//         <textarea
//           name="faq"
//           value={newFaq.faq}
//           onChange={handleInputChange}
//           placeholder="FAQ Answer"
//           className={styles.textarea}
//         />
//         <input
//           type="text"
//           name="img_url"
//           value={newFaq.img_url}
//           onChange={handleInputChange}
//           placeholder="Image URL"
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>Add FAQ</button>
//       </form>
//     </div>
//   );
// };

// export default AddFAQ;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFAQ } from '../../../services/FaqService';
import styles from './AddFAQ.module.css';

const AddFAQ = () => {
  const [newFaq, setNewFaq] = useState({
    fruit: '',
    question: '',
    faq: '',
    img_url: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewFaq({
      ...newFaq,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddFAQ = async (e) => {
    e.preventDefault();
    try {
      await addFAQ(newFaq);
      navigate('/faq');  // Redirect to FAQ list after adding
    } catch (error) {
      console.error("Error adding FAQ", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.addh2}>Add New FAQ</h2>
        <p className={styles.addp2}>Fill in the details to add a new frequently asked question</p>
      </div>
      <form onSubmit={handleAddFAQ} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="fruit" className={styles.label}>Fruit Name</label>
          <input
            type="text"
            name="fruit"
            value={newFaq.fruit}
            onChange={handleInputChange}
            placeholder="Enter fruit name"
            className={styles.addinput}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="question" className={styles.label}>Question</label>
          <input
            type="text"
            name="question"
            value={newFaq.question}
            onChange={handleInputChange}
            placeholder="Enter the question"
            className={styles.addinput}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="faq" className={styles.label}>FAQ Answer</label>
          <textarea
            name="faq"
            value={newFaq.faq}
            onChange={handleInputChange}
            placeholder="Enter the answer"
            className={styles.textarea}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="img_url" className={styles.label}>Image URL</label>
          <input
            type="text"
            name="img_url"
            value={newFaq.img_url}
            onChange={handleInputChange}
            placeholder="Enter image URL"
            className={styles.addinput}
          />
        </div>
        <button type="submit" className={styles.addbutton}>Add FAQ</button>
      </form>
    </div>
  );
};

export default AddFAQ;
