import { create } from "zustand"

interface UserState {
  name: string
  wikiId: string
  setUser: (user: { name: string; wikiId: string }) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>((set) => ({
  name: "",
  wikiId: "",
  setUser: ({ name, wikiId }) => set({ name, wikiId }),
  clearUser: () => set({ name: "", wikiId: "" }),
}))
