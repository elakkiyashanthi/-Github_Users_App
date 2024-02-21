import axios from 'axios';
import { API_URL, TOKEN } from '../utils/constants';
    
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
 });

 axiosInstance.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = 'Bearer'+ TOKEN;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


export default axiosInstance;