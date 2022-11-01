import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:5000",

});

export const createSession = async (email, password) => {
  return api.post("/sessions", { email, password })
};

export const creatUser = async (email, password, name, lastName) => {
  return api.post("/users", { email, password, name, lastName })
};