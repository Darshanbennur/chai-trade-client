import axios from "axios";

const instance = axios.create({
  baseURL: "https://chai-trade-server.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export default instance;