// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://retop-backend.vercel.app/', // Replace with your backend URL
  withCredentials: true, // Include credentials (cookies) in requests
});

export default axiosInstance;
