import { useState } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "../../components/Magnetic";

function WaveDivider() {
  return (
    <div className="wave-divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1 }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wg" x1="0" x2="1">
            <stop offset="0" stopColor="#F97316" stopOpacity="0.25" />
            <stop offset="1" stopColor="#2F3E50" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <path d="M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z" fill="url(#wg)">
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z;
                    M0,40 C400,0 900,80 1440,40 L1440,80 L0,80 Z;
                    M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z"
          />
        </path>
      </svg>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [light, setLight] = useState({ x: 50, y: 50 });
  const onMove = (e: React.MouseEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setLight({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  const badges = [
    { k: "ISO", v: "9001 معتمد" },
    { k: "1984", v: "تأسست منذ" },
    { k: "+40", v: "دولة حول العالم" },
  ];

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "8rem",
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(245, 235, 220, 0.55)",
          zIndex: 0,
        }}
      />

      {/* Orbs */}
      <div className="orb" style={{ width: 500, height: 500, background: "#F97316", top: -100, right: -100, zIndex: 1 }} />
      <div className="orb" style={{ width: 400, height: 400, background: "#2F3E50", bottom: -80, left: -100, animationDelay: "3s", zIndex: 1 }} />

      <motion.div
        className="relative hero-grid"
        style={{
          opacity,
          position: "relative",
          zIndex: 1,
          margin: "0 auto",
          maxWidth: "80rem",
          padding: "0 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.5rem",
          alignItems: "center",
          width: "100%",
        }}
        data-hero-grid
      >
        <motion.div style={{ y: y1 }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(255,255,255,0.65)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(47,62,80,0.08)",
              borderRadius: "9999px", padding: "0.5rem 1rem",
              fontSize: "0.75rem", color: "var(--bronze)", marginBottom: "1.5rem",
            }}
          >
            <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "var(--bronze)", animation: "pulse 2s infinite", display: "inline-block" }} />
            صناعة سعودية · منذ ١٩٨٤ · ISO 9001
          </motion.div>

          {/* Headline */}
          <h1 className="hero-heading" style={{ fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.025em" }}>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} style={{ display: "block" }}>
              بيت صناعة
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }} className="gradient-text" style={{ display: "block" }}>
              الكرتون والتغليف
            </motion.span>
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="hero-subtext"
            style={{ marginTop: "1.75rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", maxWidth: "36rem", lineHeight: 1.625 }}
          >
            حلول تغليف صناعية متطورة، صديقة للبيئة، مصممة لأعمالك اللوجستية حول العالم. من التصميم إلى التسليم — جودة لا تساوم.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35 }}
            className="hero-buttons"
            style={{ marginTop: "2.25rem", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}
          >
            <Magnetic as="a" href="#contact" className="magnetic-btn">اطلب عرض سعر ←</Magnetic>
            <Magnetic as="a" href="#products" className="ghost-btn">تصفّح المنتجات</Magnetic>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
            style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", fontSize: "0.875rem", color: "color-mix(in srgb, var(--navy) 65%, transparent)" }}
          >
            {badges.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{
                  width: "2.75rem", height: "2.75rem", display: "grid", placeItems: "center", borderRadius: "0.75rem",
                  background: "rgba(255,255,255,0.65)", backdropFilter: "blur(14px)", border: "1px solid rgba(47,62,80,0.08)",
                }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--bronze)", fontSize: "0.75rem" }}>{b.k}</span>
                </div>
                <div style={{ color: "color-mix(in srgb, var(--navy) 80%, transparent)" }}>{b.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>


      </motion.div>

      <WaveDivider />

      <style>{`
        .hero-heading {
          font-size: clamp(32px, 6vw, 72px);
        }
        .hero-subtext {
          font-size: 1.125rem;
        }

        @media (max-width: 1023px) {
          .hero-heading {
            font-size: clamp(25.6px, 4.8vw, 57.6px) !important;
          }
        }
        @media (max-width: 767px) {
          .hero-heading {
            font-size: clamp(28px, 8vw, 48px) !important;
          }
          .hero-subtext {
            font-size: clamp(14px, 4vw, 16px) !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100%;
          }
          .hero-buttons a,
          .hero-buttons button,
          .hero-buttons > div {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
            box-sizing: border-box;
          }
          .orb {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
