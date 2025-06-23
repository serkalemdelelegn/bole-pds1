import axios from "axios";

// Determine the base URL based on environment
const getBaseURL = () => {
  // Check if NEXT_PUBLIC_API_BASE_URL is set (for custom configuration)
  if (process.env.NEXT_PUBLIC_API_BASE_URL) {
    return process.env.NEXT_PUBLIC_API_BASE_URL;
  }
  
  // Check if we're in development mode
  if (process.env.NODE_ENV === 'development') {
    // Use localhost backend for development
    return "http://localhost:3000/api";
  }
  
  // For production, use the remote server
  return "http://49.12.106.102/api";
};

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
});

// TO USE IN COMPONENTS
// import api from '@/lib/api';

// const res = await api.get('/users');

export default api;
