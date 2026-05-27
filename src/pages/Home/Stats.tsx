import Reveal from "../../components/Reveal";
import Counter from "../../components/Counter";

const stats = [
  { v: 40, suf: "+", l: "سنة خبرة" },
  { v: 10000, suf: "+", l: "عميل حول العالم" },
  { v: 50, suf: "+", l: "دولة وصلنا إليها" },
  { v: 100, suf: "%", l: "قابل لإعادة التدوير" },
];

export default function Stats() {
  return (
    <section style={{ position: "relative", padding: "7rem 1.5rem" }}>
      <div style={{ margin: "0 auto", maxWidth: "80rem" }}>
        <div className="glass stats-container" style={{
          position: "relative", borderRadius: "2rem", padding: "3rem",
          overflow: "hidden",
        }}>
          <div className="orb" style={{ width: 400, height: 400, background: "#2F3E50", top: -100, right: -100 }} />
          <div className="orb" style={{ width: 300, height: 300, background: "#F97316", bottom: -80, left: -50, animationDelay: "4s" }} />
          <div className="stats-grid" style={{ position: "relative" }}>
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{ textAlign: "center" }}>
                  <div className="gradient-text stats-number" style={{
                    fontWeight: 900,
                    fontFamily: "var(--font-mono)",
                  }}>
                    <Counter to={s.v} suffix={s.suf} />
                  </div>
                  <div style={{ marginTop: "0.75rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", fontSize: "0.875rem" }}>
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .stats-grid {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 2.5rem;
        }
        .stats-number {
          font-size: clamp(32px, 8vw, 64px) !important;
        }
        @media (max-width: 1023px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.75rem !important;
          }
          .stats-container {
            padding: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .stats-container {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
