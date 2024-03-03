// axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://15.165.243.75:4000",
});

export default instance;
