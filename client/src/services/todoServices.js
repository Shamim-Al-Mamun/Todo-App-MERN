import axios from "axios";

const apiURL = process.env.React_App_API_URL;

//add todo
export const addTodo = (todo) => {
  return axios.post(apiURL, todo);
};

//update todo
export const updateTodo = (id, todo) => {
  return axios.put(apiURL + "/" + id, todo);
};

//delete todo
export const deleteTodo = (id) => {
  return axios.delete(apiURL + "/" + id);
};
