"use client";

import React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "id", label: "Bahasa Indonesia" },
  ];

  return (
    <div className="hidden md:flex gap-1 rounded-lg border border-border bg-background/50 p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
            language === lang.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted",
          )}
          title={`Switch to ${lang.label}`}
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
