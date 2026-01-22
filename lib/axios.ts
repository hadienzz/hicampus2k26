import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.DATABASE_URL,
});

export default axiosInstance;
