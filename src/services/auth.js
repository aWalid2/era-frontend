import { api } from "../lib/axios";

export const loginUser = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  return data;
};
