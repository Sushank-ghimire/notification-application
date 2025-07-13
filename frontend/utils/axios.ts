import axios from 'axios';

const BASE_URL =
  process.env.EXPO_PUBLIC_BACKEND_URL! || 'https://kdbvglw2-3000.asse.devtunnels.ms/api/v1/users';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
