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
      title={`Switch to ${nextTheme} mode`}
      onClick={() => {
        const updatedTheme = theme === "dark" ? "light" : "dark";
        setTheme(updatedTheme);
        applyTheme(updatedTheme);
      }}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--surface-footer)] shadow-[0_20px_40px_var(--shadow-color)] transition hover:scale-[1.03] hover:bg-[var(--surface-hover)]"
    >
      <img
        src="/favicon.ico"
        alt=""
        aria-hidden="true"
        className={`h-7 w-7 rounded-sm object-contain transition ${
          mounted && theme === "light" ? "brightness-90" : "brightness-110"
        }`}
      />
    </button>
  );
}
