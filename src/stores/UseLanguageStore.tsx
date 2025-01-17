import { create } from "zustand";

interface LanguageStore {
  language: "ru" | "ky";
  setLanguage: (language: "ru" | "ky") => void;
  t: (ky: string, ru: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: "ru",
  setLanguage: (language: "ru" | "ky") => set({ language }),
  t: (ky: string, ru: string) => {
    return get().language === "ru" ? ru : ky;
  },
}));
