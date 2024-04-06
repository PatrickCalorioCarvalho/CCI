import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.18.49:8000/',
});

export default api;
