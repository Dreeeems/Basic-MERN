import axios from "axios";
export const fetchFromApi = async () => {
  try {
    const response = await axios.get("http://localhost:3010/api/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchFromApiItem = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3010/api/product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateFromApi = async (id, data) => {
  try {
    const response = await axios.patch(
      `http://localhost:3010/api/update/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteFromApi = async (id, data) => {
  try {
    const response = await axios.delete(
      `http://localhost:3010/api/delete/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const addFromApi = async (data) => {
  try {
    const response = await axios.post(`http://localhost:3010/api/add`, data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
