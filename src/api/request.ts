import axios from 'axios';
import config from '../config/app';

const instance = axios.create({
  baseURL: config.baseUrl,
});

instance.interceptors.request.use(
  (config) => {
    const token = document.cookie.split('token=')[1];
    console.log('token', token);
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
