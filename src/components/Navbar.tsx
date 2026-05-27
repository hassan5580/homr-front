import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/products", label: "المنتجات" },
  { to: "/about", label: "من نحن" },
  { to: "/sustainability", label: "الاستدامة" },
  { to: "/contact", label: "اتصل بنا" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 500ms",
        padding: scrolled ? "0.75rem 0" : "1.5rem 0",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "80rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          whiteSpace: "nowrap",
          width: "100%",
          justifyContent: "space-between",
          borderRadius: scrolled ? "9999px" : "0",
          background: scrolled ? "rgba(255,255,255,0.65)" : "transparent",
          backdropFilter: scrolled ? "blur(14px) saturate(120%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(120%)" : "none",
          border: scrolled ? "1px solid rgba(47,62,80,0.08)" : "none",
          boxShadow: scrolled ? "0 10px 40px -20px rgba(47,62,80,0.18)" : "none",
          padding: scrolled ? "0.75rem 1.5rem" : "0 1.5rem",
          transition: "all 500ms",
        }}
      >
        {/* Logo */}
        <NavLink to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "inherit", whiteSpace: "nowrap", flexShrink: 0 }}>
          <img
            src="/logo.png"
            alt="هوم باك"
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
          />
        </NavLink>

        {/* Desktop nav */}
        <div style={{ display: "none", alignItems: "center", gap: "1rem", fontSize: "0.875rem", whiteSpace: "nowrap", flexShrink: 0 }}
          className="desktop-nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-hover
              style={({ isActive }) => ({
                color: isActive ? "var(--bronze)" : "color-mix(in srgb, var(--navy) 80%, transparent)",
                textDecoration: "none",
                transition: "color 0.2s",
                fontWeight: isActive ? 700 : 400,
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", whiteSpace: "nowrap", flexShrink: 0 }}>
          <Magnetic
            as="a"
            href="#contact"
            className="magnetic-btn"
            style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}
          >
            طلب سعر
          </Magnetic>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none", border: "none",
              display: "flex", flexDirection: "column",
              justifyContent: "center", alignItems: "center",
              gap: "5px", cursor: "pointer",
              width: "44px", height: "44px",
              padding: 0,
            }}
            aria-label="قائمة التنقل"
            className="hamburger-btn"
          >
            <span style={{ width: "22px", height: "2px", background: "var(--navy)", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ width: "22px", height: "2px", background: "var(--navy)", display: "block", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: "22px", height: "2px", background: "var(--navy)", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "var(--navy)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 49,
            }}
          >
            {links.map((l, index) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? "var(--bronze-2)" : "#FFFFFF",
                  textDecoration: "none",
                  fontWeight: isActive ? 700 : 500,
                  padding: "16px",
                  borderBottom: index < links.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  display: "block",
                  textAlign: "right",
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
