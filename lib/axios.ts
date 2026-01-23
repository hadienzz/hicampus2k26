import axios from "axios";

const axiosInstance = axios.create({
  // Frontend will call the Express backend (hicampus-backend)
  // In production, set BACKEND_URL to your deployed backend URL.
  baseURL: process.env.BACKEND_URL || "http://localhost:3001",
});

export default axiosInstance;
