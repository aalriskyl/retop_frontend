// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://retop-backend.vercel.app/',
  headers: {
    'Content-Type': 'multipart/form-data', // Or application/json based on your API needs
  },
});

// Add a request interceptor to set the Authorization header if the token is available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
