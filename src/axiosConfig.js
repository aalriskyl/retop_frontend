// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://retop-backend-185f6fffe2a0.herokuapp.com', // Replace with your backend URL
  withCredentials: true, // Include credentials (cookies) in requests
});

export default axiosInstance;
