import { create } from "zustand";

interface ISession {
  name: string;
  email: string;
  image: string;
  postUser: (userData: { name: string; email: string; image: string }) => void;
}

export const useSessionStore = create<ISession>((set) => ({
  name: "kennedy",
  email: "muthi@gmak.co",
  image: "image link",
  postUser: (userData) =>
    set((state) => ({
      name: userData.name,
      email: userData.email,
      image: userData.image,
    })),
}));
