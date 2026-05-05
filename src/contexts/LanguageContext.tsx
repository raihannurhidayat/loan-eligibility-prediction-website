"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { en, id } from "@/translations/index";

export type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const LANGUAGE_STORAGE_KEY = "loan-predictor-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem(
        LANGUAGE_STORAGE_KEY,
      ) as Language | null;
      if (savedLanguage === "en" || savedLanguage === "id") {
        setLanguageState(savedLanguage);
      }
    } catch {
      // Ignore localStorage errors in private or restricted contexts.
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // Ignore if storage is unavailable.
    }
  };

  const translations = language === "id" ? id : en;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
