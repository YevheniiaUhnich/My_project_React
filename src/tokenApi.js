import axios from "axios";

const tokenApi = axios.create({
  baseURL: "https://task-manager-api.goit.global/",
});

export default tokenApi;
