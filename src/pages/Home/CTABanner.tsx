import Reveal from "../../components/Reveal";
import Magnetic from "../../components/Magnetic";

export default function CTABanner() {
  return (
    <section style={{ position: "relative", padding: "7rem 1.5rem" }}>
      <div style={{ margin: "0 auto", maxWidth: "72rem", position: "relative", borderRadius: "2rem", overflow: "hidden", padding: "3.5rem", textAlign: "center" }}
        className="glass glass-glow">
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(249,115,22,0.15), rgba(249,115,22,0.20), rgba(47,62,80,0.15))",
        }} />
        <div className="orb" style={{ width: 500, height: 500, background: "#F97316", top: "-30%", left: "20%", opacity: 0.3 }} />
        <div style={{ position: "relative" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 900, lineHeight: 1.25 }}>
              جاهز لتحسين <span className="gradient-text">خدماتك اللوجستية؟</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ marginTop: "1.5rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", fontSize: "1.125rem", maxWidth: "42rem", margin: "1.5rem auto 0" }}>
              ابدأ مع HomePack اليوم. عرض سعر مخصص خلال ٢٤ ساعة.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Magnetic as="a" href="#contact" className="magnetic-btn" style={{ fontSize: "1.125rem", padding: "1rem 2rem" }}>
                احصل على عرض سعر مجاني
              </Magnetic>
              <Magnetic as="a" href="tel:+966" className="ghost-btn" style={{ fontSize: "1.125rem", padding: "1rem 2rem" }}>
                +966 11 000 0000
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
