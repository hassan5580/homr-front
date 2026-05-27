import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div style={{ width: "100%" }}>
      <label htmlFor={name} style={{ display: "block", fontSize: "0.75rem", color: "color-mix(in srgb, var(--navy) 65%, transparent)", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
        {label}
      </label>
      <input
        id={name} name={name} type={type}
        style={{
          width: "100%", background: "rgba(255,255,255,0.6)",
          border: "1px solid rgba(47,62,80,0.12)", borderRadius: "0.75rem",
          padding: "0.75rem 1rem", outline: "none",
          fontFamily: "var(--font-display)", fontSize: "16px",
          transition: "border-color 0.2s", boxSizing: "border-box",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--bronze)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(47,62,80,0.12)")}
      />
    </div>
  );
}

const info = [
  { t: "اتصل بنا", d: "+966 11 000 0000" },
  { t: "راسلنا", d: "sales@homepack.sa" },
  { t: "زرنا", d: "المدينة الصناعية الثانية، الرياض" },
  { t: "ساعات العمل", d: "الأحد – الخميس · ٨ صباحاً – ٥ مساءً" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div dir="rtl" lang="ar" style={{ position: "relative" }}>
      <div className="mesh-bg" />
      <div className="grain" />
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <section style={{ padding: "10rem 1.5rem 5rem" }}>
          <div style={{ margin: "0 auto", maxWidth: "72rem" }}>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "var(--bronze)", marginBottom: "0.75rem", fontFamily: "var(--font-mono)" }}>
              اتصل بنا
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)", fontWeight: 900, lineHeight: 1.15 }}>
              دعنا نبني <span className="gradient-text">شيئاً عظيماً</span>.
            </h1>
            <p style={{ marginTop: "1.5rem", fontSize: "1.125rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", maxWidth: "42rem" }}>
              أخبرنا عن مشروعك، وسيتواصل معك فريقنا الهندسي خلال ٢٤ ساعة بعرض سعر مخصص.
            </p>

            <div style={{ display: "grid", gap: "2rem", marginTop: "3.5rem", gridTemplateColumns: "1fr" }} className="contact-page-grid">
              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="glass glass-glow"
                style={{ borderRadius: "1.5rem", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem", width: "100%", boxSizing: "border-box" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-grid">
                  <Field label="الاسم الكامل" name="name" />
                  <Field label="البريد الإلكتروني" name="email" type="email" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-grid">
                  <Field label="اسم الشركة" name="company" />
                  <Field label="رقم الهاتف" name="phone" type="tel" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "color-mix(in srgb, var(--navy) 65%, transparent)", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                    رسالتك
                  </label>
                  <textarea
                    rows={5}
                    style={{
                      width: "100%", background: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(47,62,80,0.12)", borderRadius: "0.75rem",
                      padding: "0.75rem 1rem", outline: "none", resize: "none",
                      fontFamily: "var(--font-display)", fontSize: "16px",
                      transition: "border-color 0.2s", boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--bronze)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(47,62,80,0.12)")}
                  />
                </div>
                <button type="submit" className="magnetic-btn" style={{ width: "fit-content" }}>
                  {sent ? "✓ تم الإرسال" : "إرسال الطلب ←"}
                </button>
              </motion.form>

              {/* Info */}
              <div className="contact-info-panel" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", width: "100%" }}>
                {info.map((c) => (
                  <div key={c.t} className="glass contact-info-card" style={{ borderRadius: "1rem", padding: "1.5rem" }}>
                    <div style={{ fontSize: "0.875rem", color: "color-mix(in srgb, var(--navy) 60%, transparent)" }}>{c.t}</div>
                    <div style={{ fontWeight: 700, marginTop: "0.25rem", fontSize: "1.125rem", color: "var(--navy)" }}>{c.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .contact-page-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .contact-page-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .contact-page-grid { grid-template-columns: 55fr 45fr !important; }
        }
        @media (max-width: 767px) {
          .contact-page-grid { grid-template-columns: 1fr !important; }
          .contact-info-panel {
            height: 300px !important;
            overflow-y: auto;
          }
          .contact-info-card {
            padding: 1rem !important;
          }
        }
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
