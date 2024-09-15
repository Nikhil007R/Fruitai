// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getFAQs } from '../../../services/FaqService';
// import styles from './FAQList.module.css';

// const FAQList = () => {
//   const [faqs, setFaqs] = useState([]);

//   useEffect(() => {
//     loadFAQs();
//   }, []);

//   const loadFAQs = async () => {
//     try {
//       const response = await getFAQs();
//       setFaqs(response.data);
//     } catch (error) {
//       console.error("Error fetching FAQs", error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2>All FAQs</h2>
//       <Link to="/faq/add" className={styles.addNew}>Add New FAQ</Link>  {/* Link to add FAQ */}
//       <ul>
//         {faqs.map((faq) => (
//           <li key={faq.id} className={styles.faqItem}>
//             <h3>{faq.fruit}</h3>
//             <p>{faq.question}</p>
//             <p>{faq.faq}</p>
//             <img src={faq.img_url} alt={faq.fruit} />
//             <Link to={`/faq/update/${faq.id}`}>Update FAQ</Link>
//             <Link to={`/faq/delete/${faq.id}`}>Delete FAQ</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FAQList;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFAQs } from '../../../services/FaqService';
import styles from './FAQList.module.css';

const FAQList = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    loadFAQs();
  }, []);

  const loadFAQs = async () => {
    try {
      const response = await getFAQs();
      setFaqs(response.data);
    } catch (error) {
      console.error("Error fetching FAQs", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.listh2}>Frequently Asked Questions</h2>
        <Link to="/faq/add" className={styles.addNew}>Add New FAQ</Link>
      </div>

      <div className={styles.gridContainer}>
        {faqs.map((faq) => (
          <div key={faq.id} className={styles.faqCard}>
            <img src={faq.img_url} alt={faq.fruit} className={styles.faqImage} />
            <div className={styles.faqContent}>
              <h3>{faq.fruit}</h3>
              <p className={styles.question}>{faq.question}</p>
              <p className={styles.answer}>{faq.faq}</p>
              <div className={styles.actionLinks}>
                <Link to={`/faq/update/${faq.id}`} className={styles.updateLink}>Update</Link>
                <Link to={`/faq/delete/${faq.id}`} className={styles.deleteLink}>Delete</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQList;
