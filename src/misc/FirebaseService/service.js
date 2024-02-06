import axios from "axios";

const BASE_URL = "http://dzahidi.firebaseapp.com";

const service = {
  getAll: async () => {
    const response = await axios.get(`${BASE_URL}/collection.json`);
    return response.data;
  },
  getId: async (id) => {
    const response = await axios.get(`${BASE_URL}/collection/${id}.json`);
    return response.data;
  },

  addData: async (data) => {
    const response = await axios.post(`${BASE_URL}/collection.json`, data);
    return response.data;
  },
  updateData: async (id, data) => {
    const response = await axios.put(`${BASE_URL}/collection/${id}.json`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await axios.delete(`${BASE_URL}/collection/${id}.json`);
    return response.data;
  },
};

export default service;
