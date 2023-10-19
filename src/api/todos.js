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

export const createTodo = async (payload) => {
  const { title, isDone } = payload;
  try {
    const res = await axios.post(`${baseURL}/todos`, { title, isDone });
    return res.data;
  } catch (error) {
    console.error('[Post Todos failed]: ', error);
  }
};

export const patchTodo = () => {};

export const deleteTodo = () => {};
