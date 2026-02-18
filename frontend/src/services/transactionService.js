// src/services/transactionService.js
import axios from "axios";

const API_URL = "http://localhost:5000/transactions";

// Get summary (income, expense, savings)
const getSummary = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API_URL}/summary`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data; // { income, expense, savings }
};

// Add new transaction
const addTransaction = async (transaction) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(API_URL, transaction, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

// Get all transactions
const getTransactions = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data; // array of transactions
};

export default { getSummary, addTransaction, getTransactions };
