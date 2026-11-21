"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { label: "Overview", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState(null);
  const menuButton = useRef(null);
  const header = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    if (pathname !== "/") return;
    const updateSection = () => {
      const offset = header.current.offsetHeight + window.innerHeight * 0.25;
      const about = document.getElementById("about");
      const work = document.getElementById("work");
      if (about && about.getBoundingClientRect().top <= offset) setSection("About");
      else if (work && work.getBoundingClientRect().top <= offset) setSection("Projects");
      else setSection("Overview");
    };
    updateSection();
    window.addEventListener("scroll", updateSection, { passive: true });
    window.addEventListener("resize", updateSection);
    return () => {
      window.removeEventListener("scroll", updateSection);
      window.removeEventListener("resize", updateSection);
    };
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    nav.current?.querySelector("a")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeIfOutside = (event) => {
      if (!header.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", closeIfOutside);
    document.addEventListener("focusin", closeIfOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", closeIfOutside);
      document.removeEventListener("focusin", closeIfOutside);
    };
  }, [menuOpen]);

  const active = pathname === "/" ? section || "Overview" : pathname === "/projects" ? "Projects" : "Contact";

  return (
    <header className="site-header" ref={header}>
      <div className="page-width header-inner">
        <Link href="/" className="wordmark" aria-label="Sivaranjan Dinath, home" onClick={() => setMenuOpen(false)}>
          <Image src="/icon.png" className="brand-icon" width={40} height={40} alt="" unoptimized />
          <span><span className="wordmark-first">Sivaranjan </span>Dinath</span>
        </Link>
        <nav ref={nav} className={`top-nav${menuOpen ? " is-open" : ""}`} id="primary-navigation" aria-label="Primary">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={active === label ? (href === pathname ? "page" : "location") : undefined} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link href="/contact" className="contact-link" aria-current={active === "Contact" ? "page" : undefined} onClick={() => setMenuOpen(false)}>
            Get in touch
          </Link>
          <button
            className="menu-trigger" ref={menuButton} type="button"
            aria-expanded={menuOpen} aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(value => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
