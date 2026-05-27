import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cards = [
  { t: "رسالتنا", d: "تقديم حلول تغليف هندسية تجمع بين المتانة والاستدامة والجمال." },
  { t: "رؤيتنا", d: "أن نكون المرجع الأول في صناعة التغليف الصناعي في الشرق الأوسط." },
  { t: "قيمنا", d: "الإتقان، الشفافية، الاحترام للبيئة، والالتزام بالموعد." },
];

const milestones = [
  { y: "1984", t: "تأسيس HomePack في الرياض" },
  { y: "1998", t: "أول خط إنتاج آلي بمعايير ISO" },
  { y: "2010", t: "التوسع لأكثر من ٢٠ دولة" },
  { y: "2024", t: "الانتقال الكامل للطاقة المتجددة" },
];

export default function About() {
  return (
    <div dir="rtl" lang="ar" style={{ position: "relative" }}>
      <div className="mesh-bg" />
      <div className="grain" />
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <section style={{ paddingTop: "10rem", paddingBottom: "5rem", padding: "10rem 1.5rem 5rem" }}>
          <div style={{ margin: "0 auto", maxWidth: "64rem" }}>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "var(--bronze)", marginBottom: "0.75rem", fontFamily: "var(--font-mono)" }}>
              من نحن
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)", fontWeight: 900, lineHeight: 1.15 }}>
              أربعة عقود من <span className="gradient-text">الحرفة الصناعية</span>.
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              style={{ marginTop: "2rem", fontSize: "1.125rem", color: "color-mix(in srgb, var(--navy) 75%, transparent)", lineHeight: 2 }}
            >
              تأسست HomePack — هوم باك عام ١٩٨٤ كبيت متخصص في صناعة الكرتون والتغليف الصناعي.
              على مدى أربعين عاماً، خدمنا أكثر من ١٠٬٠٠٠ عميل في ٥٠ دولة، وأصبحنا الشريك الموثوق
              لكبرى شركات الخدمات اللوجستية والصناعات الغذائية والتجزئة في المنطقة والعالم.
            </motion.p>

            {/* Mission/Vision/Values */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "4rem" }}>
              {cards.map((c, i) => (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass"
                  style={{ borderRadius: "1rem", padding: "2rem" }}
                >
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: "var(--bronze)" }}>{c.t}</h3>
                  <p style={{ marginTop: "0.75rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", lineHeight: 1.625 }}>{c.d}</p>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginTop: "5rem" }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.y}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ borderRight: "2px solid var(--bronze)", paddingRight: "1.25rem" }}
                >
                  <div style={{ fontFamily: "var(--font-mono)", fontWeight: 900, fontSize: "1.875rem", color: "var(--bronze)" }}>
                    {m.y}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", marginTop: "0.5rem" }}>
                    {m.t}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />


    </div>
  );
}
