import { create } from "zustand";
import api from "../lib/api";

export const useAuth = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  login: async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    set({ token: data.token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ token: null, user: null });
  },
  fetchMe: async () => {
    const { data } = await api.get("/protected/me");
    set({ user: data.user });
  },
}));
