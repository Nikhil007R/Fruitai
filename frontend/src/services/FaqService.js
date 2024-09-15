import axios from 'axios';

const API_URL = 'http://localhost:8000/api/faqs/';  // Adjust the URL if needed

// Get all FAQs
export const getFAQs = () => {
  return axios.get(API_URL);
};

// Add a new FAQ
export const addFAQ = (faq) => {
  return axios.post(`${API_URL}`, faq);
};

// Update an FAQ
export const updateFAQ = (id, faq) => {
  return axios.put(`${API_URL}${id}/`, faq);
};

// Delete an FAQ
export const deleteFAQ = (id) => {
  return axios.delete(`${API_URL}${id}/`);
};
