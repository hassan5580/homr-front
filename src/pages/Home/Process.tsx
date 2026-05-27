import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";

const steps = [
  { n: "01", t: "استشارة وتصميم", d: "نناقش احتياجاتك ونصمم الحل الأمثل." },
  { n: "02", t: "إنتاج بدقة عالية", d: "خطوط إنتاج آلية بمعايير ISO الدولية." },
  { n: "03", t: "تسليم سريع وآمن", d: "شبكتنا اللوجستية توصل في الموعد." },
];

export default function Process() {
  return (
    <section id="process" style={{ position: "relative", padding: "8rem 1.5rem" }}>
      <div style={{ margin: "0 auto", maxWidth: "80rem" }}>
        <SectionHeading
          eyebrow="آلية العمل"
          title={<>ثلاث خطوات لـ <span className="gradient-text">تغليف متقن</span>.</>}
        />
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
          {/* Connecting line */}
          <div className="process-line" style={{
            position: "absolute", top: "3rem", right: "16%", left: "16%", height: "1px",
          }}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              style={{
                height: "100%",
                transformOrigin: "right",
                background: "linear-gradient(to left, var(--bronze), rgba(249,115,22,0.6), rgba(47,62,80,0.6))",
              }}
            />
          </div>

          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div style={{ textAlign: "center" }}>
                <div style={{ position: "relative", display: "inline-grid", marginBottom: "1.5rem" }}>
                  <div className="glass glass-glow" style={{
                    width: "6rem", height: "6rem", borderRadius: "1rem",
                    display: "grid", placeItems: "center",
                    fontFamily: "var(--font-mono)", fontWeight: 900, fontSize: "1.875rem",
                  }}>
                    <span className="gradient-text">{s.n}</span>
                  </div>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>{s.t}</h3>
                <p style={{ marginTop: "0.75rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)" }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .process-line { display: none; } }
      `}</style>
    </section>
  );
}
