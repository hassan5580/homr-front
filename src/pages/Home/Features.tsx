import Reveal from "../../components/Reveal";
import Tilt from "../../components/Tilt";
import SectionHeading from "../../components/SectionHeading";

const items = [
  { icon: "◆", title: "متانة استثنائية", desc: "كرتون مقوى متعدد الطبقات يتحمل الشحن الدولي وأقسى ظروف النقل.", color: "#F97316" },
  { icon: "♻", title: "صديق للبيئة", desc: "١٠٠٪ قابل لإعادة التدوير، مصنوع من ألياف معاد تدويرها بمعايير عالمية.", color: "#2F3E50" },
  { icon: "⚡", title: "توصيل سريع", desc: "شبكة لوجستية تغطي ٤٠+ دولة، تسليم خلال ٤٨ ساعة محلياً.", color: "#F5A623" },
];

export default function Features() {
  return (
    <section id="features" style={{ position: "relative", padding: "8rem 1.5rem" }}>
      <div style={{ margin: "0 auto", maxWidth: "80rem" }}>
        <SectionHeading
          eyebrow="لماذا HomePack"
          title={<>صناعة تُلامس <span className="gradient-text">الكمال</span>.</>}
          sub="كل صندوق يخرج من خطوط إنتاجنا يحمل أربعة عقود من الخبرة والابتكار."
        />
        <div className="features-grid" style={{ display: "grid", gap: "1.5rem" }}>
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Tilt>
                <div className="glass glass-glow feature-card" style={{
                  borderRadius: "1.5rem", padding: "2rem", height: "100%",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", top: -40, left: -40,
                    width: "8rem", height: "8rem", borderRadius: "50%",
                    filter: "blur(64px)", opacity: 0.4,
                    background: it.color,
                    transition: "opacity 0.3s",
                  }} />
                  <div style={{ position: "relative" }}>
                    <div style={{ fontSize: "3rem", marginBottom: "1.5rem", color: it.color, textShadow: `0 0 30px ${it.color}` }}>
                      {it.icon}
                    </div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>{it.title}</h3>
                    <p style={{ color: "color-mix(in srgb, var(--navy) 70%, transparent)", lineHeight: 1.625 }}>{it.desc}</p>
                    <div style={{
                      marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem",
                      fontSize: "0.875rem", color: "var(--bronze)", opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                      className="feature-more"
                    >
                      <span>اعرف المزيد</span> <span>←</span>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .glass:hover .feature-more { opacity: 1 !important; }
        .features-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1023px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
          .feature-card {
            padding: 1.25rem !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
