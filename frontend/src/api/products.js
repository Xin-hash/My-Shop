// src/api/products.js
import axios from "axios";

const API_URL = "https://my-shop-5e2v.onrender.com/api/products"; // adjust if backend runs elsewhere

console.log("API URL:", API_URL); // Debugging line to check the URL

export const getProducts = async () => {
  return await axios.get(API_URL);
};

export const getProductById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createProduct = async (productData) => {
  return await axios.post(API_URL, productData);
};

export const updateProduct = async (id, productData) => {
  return await axios.put(`${API_URL}/${id}`, productData);
};

export const deleteProduct = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
