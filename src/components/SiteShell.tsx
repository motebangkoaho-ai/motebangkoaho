import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/photography", label: "Photography" },
  { to: "/design", label: "Design" },
  { to: "/about", label: "About" },
  { to: "/booking", label: "Book Now" },
];

function useScrollY() {
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--scroll-y",
          `${window.scrollY * 0.15}px`,
        );
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { toggle } = useTheme();
  useScrollY();

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="scroll-bg" />
      <div className="scroll-grid" />
      <div className="scroll-orb a" />
      <div className="scroll-orb b" />

      <nav className="site-nav">
        <Link to="/" className="logo">
          Motebang <span>Koaho</span>
        </Link>
        <ul className={`nav-center${open ? " open" : ""}`}>
          {navItems.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                className={pathname === n.to ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button
            type="button"
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggle}
          />
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <main className="page-enter" key={pathname}>{children}</main>

      <footer className="site-footer">
        <Link to="/" className="footer-logo">
          Motebang <span>Koaho</span>
        </Link>
        <span className="footer-copy">© 2024 Motebang Koaho. All rights reserved.</span>
        <div className="social-links">
          <a href="https://www.behance.net/euphoriaheart" target="_blank" rel="noreferrer" aria-label="Behance">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="X">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </footer>
    </>
  );
}

export function PortfolioGrid({
  items,
}: {
  items: { title: string; tag: string; kind?: "photo" | "design" }[];
}) {
  return (
    <div className="portfolio-grid">
      {items.map((it) => (
        <div className="portfolio-item" key={it.title}>
          <div className="portfolio-placeholder">
            {it.kind === "design" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="2" y="3" width="20" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            )}
          </div>
          <div className="portfolio-overlay">
            <h3>{it.title}</h3>
            <span>{it.tag}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
