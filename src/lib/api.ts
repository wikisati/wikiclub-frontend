import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

// Add response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const api = {
  auth: {
    login: async (code: string) => {
      const response = await API.post('/api/exchange/', { code });
      return response.data;
    },
    logout: async () => {
      await API.post('/api/auth/logout/');
    },
  },
  user: {
    getProfile: async () => {
      const response = await API.get('/api/profile/');
      return response.data;
    },
    updateProfile: async (data: any) => {
      const response = await API.put('/api/profile/', data);
      return response.data;
    },
  },
};

export default API;
