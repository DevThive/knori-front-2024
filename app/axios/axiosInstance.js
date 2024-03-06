// axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.knori.or.kr",
});

export default instance;
