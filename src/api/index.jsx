import axios from "axios";

const url = "https://merm-diala.herokuapp.com/";

export const fetchProducts = () => axios.get(url);

export const createProduct = (newProduct) => axios.post(url, newProduct);

export const updateProduct = (id, updatedProduct) =>
  axios.patch(`${url}/${id}`, updatedProduct);

export const deleteProduct = (id) => axios.delete(`${url}/${id}`);

export const likeProduct = (id) => axios.patch(`${url}/likeProduct/${id}`);
