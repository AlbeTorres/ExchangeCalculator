import axios from "axios";

// stands for "custom axios"
const kaxios = axios.create({
  headers: { accept: "application/json" },
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default kaxios;
