import { create } from 'zustand';

type User = {
  username: string;
  email?: string;
  avatar?: string;
};

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
};

export const useStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: true }),
}));
