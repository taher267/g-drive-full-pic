import axios from 'axios';

// const baseURL = 'https://full-pic.onrender.com/api/v1';
// const baseURL = 'http://localhost:4005/api/v1';
const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://full-pic.onrender.com/api/v1'
    : 'http://localhost:4005/api/v1';
export const axiosApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios.create({
  baseURL,
  //   withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // "Content-Type":"multipart/form-data"
  },
});
