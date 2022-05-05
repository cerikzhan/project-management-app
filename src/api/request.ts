import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    return token;
  },
  (error) => Promise.reject(error)
);

export default instance;
