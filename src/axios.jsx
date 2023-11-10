import axios from "axios";

// we need to pass the baseURL as an object
const API = axios.create({
  baseURL: "https://bus.hoogaaa.com/api/v1",
});

export default API;