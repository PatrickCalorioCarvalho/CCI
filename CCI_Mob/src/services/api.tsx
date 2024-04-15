import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ulr = 'http://192.168.18.48:8000/';

export const login = axios.create({
  baseURL: ulr,
});

const api = axios.create({
  baseURL: ulr,
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('my-token');
    if (token) {
      config.headers.Authorization = 'Token ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
