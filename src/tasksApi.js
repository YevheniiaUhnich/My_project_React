import axios from "axios";

const tasksApi = axios.create({
  baseURL: "https://62584f320c918296a49543e7.mockapi.io",
});

export default tasksApi;
