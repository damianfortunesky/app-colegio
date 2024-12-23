import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Ajustar según tu backend
});

export default api;
