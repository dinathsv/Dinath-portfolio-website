"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  function toggleTheme(event) {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTheme(next);
      return;
    }

    if (typeof document.startViewTransition !== "function") {
      root.classList.add(styles.fade);
      setTheme(next);
      window.setTimeout(() => root.classList.remove(styles.fade), 320);
      return;
    }
    if (root.classList.contains(styles.reveal)) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + bounds.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    root.style.setProperty("--theme-circle-at", `${x}px ${y}px`);
    root.style.setProperty("--theme-circle-radius", `${Math.ceil(radius)}px`);
    root.classList.add(styles.reveal);

    const transition = document.startViewTransition(() => flushSync(() => setTheme(next)));
    transition.finished.finally(() => {
      root.classList.remove(styles.reveal);
      root.style.removeProperty("--theme-circle-at");
      root.style.removeProperty("--theme-circle-radius");
    });
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label="Dark mode"
      aria-pressed={mounted ? resolvedTheme === "dark" : undefined}
      title="Switch between light and dark mode"
      onClick={toggleTheme}
    >
      <Moon className={styles.moon} aria-hidden="true" />
      <Sun className={styles.sun} aria-hidden="true" />
    </button>
  );
}
