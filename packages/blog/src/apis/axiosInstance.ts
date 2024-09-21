import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost/',
  headers: {
    'Content-Type': 'application/json',
  },
});
