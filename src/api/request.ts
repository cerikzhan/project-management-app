import axios from 'axios';
import config from '../config/app';

const instance = axios.create({
  baseURL: config.baseUrl,
});

instance.interceptors.request.use(
  (config) => {
    const token = document.cookie.split('token=')[1];
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(undefined, (error) => {
  return Promise.reject(error.response.data);
});

export default instance;
