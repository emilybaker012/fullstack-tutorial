import axios from 'axios';

// Create axios instance
const axiosClient = axios.create();

// Set base url
axiosClient.defaults.baseURL = process.env.BASE_URL || 'http://localhost:3500/api/v1';
// Set default headers
axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

// Pass cookies in the header
axiosClient.defaults.withCredentials = true;

// Set default timeout
axiosClient.defaults.timeout = 2000; // Wait 2 sec

export default axiosClient;
