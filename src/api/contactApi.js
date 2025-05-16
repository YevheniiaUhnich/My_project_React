import axios from "axios";

const contactApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export default contactApi;
