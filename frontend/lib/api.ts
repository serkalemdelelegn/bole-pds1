import axios from "axios";

const api = axios.create({
  baseURL: "http://49.12.106.102/api",
  withCredentials: true,
});

// TO USE IN COMPONENTS
// import api from '@/lib/api';

// const res = await api.get('/users');

export default api;
