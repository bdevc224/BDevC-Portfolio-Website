// src/Hooks/useDarkMode.ts
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

export default function useDarkMode(): [ThemeMode, (theme: ThemeMode) => void] {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("theme") as ThemeMode | null;
    return saved ?? "system";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (mode: ThemeMode) => {
      if (mode === "system") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.toggle("dark", isDark);
      } else {
        root.classList.toggle("dark", mode === "dark");
      }
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        root.classList.toggle("dark", e.matches);
      };
      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return [theme, setTheme];
}