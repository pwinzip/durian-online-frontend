import axios from "axios";

const authService = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  withCredentials: true,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
});

export default authService;
