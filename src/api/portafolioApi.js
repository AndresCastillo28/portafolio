import axios from "axios";

const portafolioApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

portafolioApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };

  return config;
});

export default portafolioApi;
