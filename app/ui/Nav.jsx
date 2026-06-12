"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/keynotes", label: "Keynotes" },
  { href: "/events", label: "Events" },
  { href: "/books", label: "Books" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav className={scrolled ? "site-nav scrolled" : "site-nav"}>
        <Link href="/" className="nav-brand">
          <span className="nav-brand-mark">RHB</span>
          <span className="nav-brand-name">
            <strong>R Harrison Baxter</strong>
            <span>Leadership &amp; Growth</span>
          </span>
        </Link>

        <div className="nav-links">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "active" : ""}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <Link href="/contact" className="nav-book-btn">
            <CalendarDays size={16} />
            Book Dr. Baxter
          </Link>
          <button
            className="nav-mobile-btn"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="pill-btn pill-btn-dark"
            style={{ marginTop: 8, justifyContent: "center" }}
            onClick={() => setMenuOpen(false)}
          >
            Book Dr. Baxter
          </Link>
        </div>
      )}
    </>
  );
}
