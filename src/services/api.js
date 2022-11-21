import axios from 'axios';

export const api = axios.create({
  baseURL: "http://ec2-44-203-131-82.compute-1.amazonaws.com:5000",
  //baseURL: "http://localhost:5000",
});

export const createSession = async (email, password) => {
  return api.post("/sessions", { email, password })
};

export const createUser = async (email, password, name, lastName) => {
  return api.post("/users/register", { email, password, name, lastName })
};