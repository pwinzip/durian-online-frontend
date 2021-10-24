import axios from "axios";

const BackendService = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

BackendService.interceptors.request.use((config) => {
  let token = "";

  try {
    let userStorage = localStorage.getItem("user");
    let userJson = JSON.parse(userStorage);
    token = userJson["token"];
  } catch (error) {
    console.log(error);
  }

  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

export default BackendService;
