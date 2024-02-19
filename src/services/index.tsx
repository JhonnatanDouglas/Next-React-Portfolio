import axios from "axios";

export const api = axios.create({
  baseURL: "https://raw.githubusercontent.com/JhonnatanDouglas/PortBack/main",
  timeout: 8000,
});
