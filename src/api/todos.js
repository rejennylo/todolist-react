import axios from 'axios';
const baseURL = 'http://localhost:3001';

export const getTodos = async () => {
  try {
    const res = await axios.get(`${baseURL}/todos`);
    return res.data;
  } catch (error) {
    console.error('[Get Todos failed]: ', error);
  }
};

export const createTodos = () => {};

export const patchTodos = () => {};

export const deleteTodos = () => {};
