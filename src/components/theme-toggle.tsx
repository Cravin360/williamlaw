"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const preferredTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

    setTheme(preferredTheme);
    applyTheme(preferredTheme);
    setMounted(true);
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={mounted ? theme === "dark" : true}
      onClick={() => {
        const updatedTheme = theme === "dark" ? "light" : "dark";
        setTheme(updatedTheme);
        applyTheme(updatedTheme);
      }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--surface-footer)] px-4 py-3 text-sm font-medium text-[var(--text-soft)] shadow-[0_20px_40px_var(--shadow-color)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
    >
      <span>{mounted ? nextTheme : "Theme"}</span>
      <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
        Mode
      </span>
    </button>
  );
}
