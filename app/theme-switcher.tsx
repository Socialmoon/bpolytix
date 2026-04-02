"use client";

import { useEffect, useState } from "react";

type ThemePreference = "light" | "dark" | "system";

const STORAGE_KEY = "theme-preference";

function applyTheme(theme: ThemePreference) {
  const root = document.documentElement;
  const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolvedTheme = theme === "system" ? (isSystemDark ? "dark" : "light") : theme;
  root.setAttribute("data-theme", resolvedTheme);
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemePreference>("system");

  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY) as ThemePreference | null;
    const initialTheme = storedTheme ?? "system";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onThemeChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", onThemeChange);
    return () => media.removeEventListener("change", onThemeChange);
  }, [theme]);

  function setPreference(nextTheme: ThemePreference) {
    setTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <div>
      <p className="text-sm font-semibold text-[var(--text-strong)]">Theme</p>
      <div className="mt-3 inline-flex rounded-full border border-[var(--line)] bg-[var(--surface-soft)] p-1">
        {(["light", "dark", "system"] as const).map((option) => {
          const active = theme === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setPreference(option)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition ${
                active
                  ? "bg-[var(--brand)] text-white"
                  : "text-[var(--text-soft)] hover:text-[var(--text-strong)]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
