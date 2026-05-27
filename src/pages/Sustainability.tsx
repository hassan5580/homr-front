import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const stats = [
  { v: "85%", l: "خفض انبعاثات الكربون" },
  { v: "100%", l: "طاقة متجددة" },
  { v: "12M", l: "شجرة محفوظة سنوياً" },
  { v: "0", l: "مخلفات للمكب" },
];

const certs = [
  { t: "FSC معتمد", d: "كل المواد الخام من غابات مدارة بشكل مستدام ومعتمدة دولياً." },
  { t: "ISO 14001", d: "نظام إدارة بيئي معتمد يضمن التحسين المستمر لأدائنا البيئي." },
  { t: "Zero Waste", d: "إعادة استخدام ١٠٠٪ من المخلفات الصناعية داخل دورة الإنتاج." },
  { t: "Solar Powered", d: "مصنعنا الرئيسي يعمل بالكامل على الطاقة الشمسية منذ ٢٠٢٤." },
];

export default function Sustainability() {
  return (
    <div dir="rtl" lang="ar" style={{ position: "relative" }}>
      <div className="mesh-bg" />
      <div className="grain" />
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <section style={{ padding: "10rem 1.5rem 5rem" }}>
          <div style={{ margin: "0 auto", maxWidth: "72rem" }}>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "var(--bronze)", marginBottom: "0.75rem", fontFamily: "var(--font-mono)" }}>
              الاستدامة
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)", fontWeight: 900, lineHeight: 1.15 }}>
              نصنع التغليف <span className="gradient-text">دون أن نؤذي الكوكب</span>.
            </h1>
            <p style={{ marginTop: "1.5rem", fontSize: "1.125rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", maxWidth: "48rem", lineHeight: 1.8 }}>
              كل ليفة كرتون في منتجاتنا قابلة لإعادة التدوير بالكامل، ومصدرها غابات تُدار وفق
              معايير FSC الدولية. الطاقة في مصانعنا متجددة ١٠٠٪، وعملياتنا خالية تماماً من
              المخلفات المُرسلة للمكبات.
            </p>

            {/* Stats */}
            <div data-stats-grid style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem", marginTop: "4rem" }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass sustainability-stat-card"
                  style={{ borderRadius: "1rem", padding: "1.75rem", textAlign: "center" }}
                >
                  <div className="gradient-text sustainability-stat-num" style={{ fontFamily: "var(--font-mono)", fontWeight: 900 }}>
                    {s.v}
                  </div>
                  <div style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)" }}>
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="certs-grid" style={{ display: "grid", gap: "2rem", marginTop: "5rem" }}>
              {certs.map((c, i) => (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass glass-glow cert-card"
                  style={{ borderRadius: "1rem", padding: "2rem" }}
                >
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--bronze)" }}>{c.t}</h3>
                  <p style={{ marginTop: "0.75rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", lineHeight: 1.625 }}>{c.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        [data-stats-grid] {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        .sustainability-stat-num {
          font-size: clamp(32px, 8vw, 64px) !important;
        }
        .certs-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (min-width: 1024px) {
          [data-stats-grid] { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 1023px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .certs-grid {
            grid-template-columns: 1fr !important;
          }
          .cert-card {
            padding: 1.25rem !important;
          }
        }
        @media (max-width: 480px) {
          [data-stats-grid] {
            grid-template-columns: 1fr !important;
          }
          .sustainability-stat-card {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}
