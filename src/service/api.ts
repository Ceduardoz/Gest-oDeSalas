import axios from "axios";

// API
export const api = axios.create({
  baseURL: "http://localhost:3000",
});
