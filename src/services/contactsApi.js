import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const API_ENDPOINT = '/contacts';

export const getContacts = async () => {
  const res = await axios.get(`${API_ENDPOINT}`);
  return res.data ? res.data : Promise.reject(new Error());
};

export const addContact = async contact => {
  const res = await axios.post(`${API_ENDPOINT}`, contact);
  return res.data ? res.data : Promise.reject(new Error());
};

export const deleteContact = async id => {
  const res = await axios.delete(`${API_ENDPOINT}/${id}`);
  return res.data ? res.data : Promise.reject(new Error());
};
