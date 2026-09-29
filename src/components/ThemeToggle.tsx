"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => setTheme(currentTheme()), []);

  function toggle() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      className="rounded-full px-3 py-1.5 font-mono text-xs tracking-wider text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
      aria-label="Switch colour theme"
    >
      {theme === null ? "THEME" : theme === "dark" ? "BLUEPRINT" : "PAPER"}
    </button>
  );
}
