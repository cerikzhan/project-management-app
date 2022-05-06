import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 5000,
});

export default axiosInstance;
