// src/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:5000/auth"; // adjust to your backend route

// Register new user
const register = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data; // { message: "User registered successfully" }
};

// Login user
const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  return res.data.token; // backend should return JWT
};

export default { register, login };
