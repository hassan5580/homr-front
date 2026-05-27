import Reveal from "../../components/Reveal";
import Counter from "../../components/Counter";
import Magnetic from "../../components/Magnetic";

const sustStats = [
  { v: 85, suf: "%", l: "خفض انبعاثات الكربون" },
  { v: 12, suf: "م", l: "شجرة حُفظت سنوياً" },
  { v: 100, suf: "%", l: "طاقة متجددة" },
  { v: 0, suf: "", l: "مخلفات للمكب" },
];

export default function SustainabilitySection() {
  return (
    <section style={{ position: "relative", padding: "8rem 1.5rem" }}>
      <div style={{ margin: "0 auto", maxWidth: "80rem" }}>
        <div className="glass" style={{
          position: "relative", borderRadius: "2rem", overflow: "hidden", padding: "3rem",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.08), rgba(47,62,80,0.12))",
          }} />
          <div className="orb" style={{ width: 350, height: 350, background: "#F97316", top: -80, left: -80 }} />
          <div style={{
            position: "relative", display: "grid", gap: "3rem",
            gridTemplateColumns: "1fr",
          }}
            className="sust-grid"
          >
            <div>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "var(--bronze)", marginBottom: "0.75rem", fontFamily: "var(--font-mono)" }}>
                الاستدامة
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, lineHeight: 1.25 }}>
                نصنع التغليف <span className="gradient-text">دون أن نؤذي الكوكب</span>.
              </h2>
              <p style={{ marginTop: "1.25rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", lineHeight: 1.625 }}>
                نلتزم بأعلى معايير الاستدامة البيئية في كل خطوة من سلسلة الإنتاج، من اختيار المواد إلى الطاقة المتجددة.
              </p>
              <Magnetic as="a" href="#contact" className="ghost-btn" style={{ marginTop: "2rem", display: "inline-flex" }}>
                اطّلع على تقريرنا البيئي
              </Magnetic>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {sustStats.map((s, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="glass" style={{ borderRadius: "1rem", padding: "1.5rem" }}>
                    <div className="gradient-text" style={{ fontFamily: "var(--font-mono)", fontWeight: 900, fontSize: "2.25rem" }}>
                      <Counter to={s.v} suffix={s.suf} />
                    </div>
                    <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)" }}>
                      {s.l}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 1024px) {
          .sust-grid { grid-template-columns: 1fr 1fr !important; align-items: center; }
          .glass .sust-grid > div:first-child { }
        }
        @media (min-width: 768px) {
          .glass > .relative > div[style*="padding: 3rem"] { padding: 5rem !important; }
        }
      `}</style>
    </section>
  );
}
