import { useState } from "react";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import Magnetic from "../../components/Magnetic";

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div style={{ width: "100%" }}>
      <label htmlFor={name} style={{ display: "block", fontSize: "0.75rem", color: "color-mix(in srgb, var(--navy) 65%, transparent)", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        style={{
          width: "100%", background: "rgba(255,255,255,0.6)",
          border: "1px solid rgba(47,62,80,0.12)", borderRadius: "0.75rem",
          padding: "0.75rem 1rem", outline: "none",
          fontFamily: "var(--font-display)", fontSize: "16px",
          transition: "border-color 0.2s",
          boxSizing: "border-box",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--bronze)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(47,62,80,0.12)")}
      />
    </div>
  );
}

const contactInfo = [
  { icon: "✆", t: "اتصل بنا", d: "+966 11 000 0000" },
  { icon: "✉", t: "راسلنا", d: "sales@homepack.sa" },
  { icon: "⌖", t: "زرنا", d: "المدينة الصناعية الثانية، الرياض" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" style={{ position: "relative", padding: "8rem 1.5rem", overflow: "hidden" }}>
      <div className="orb" style={{ width: 500, height: 500, background: "#2F3E50", top: "10%", right: "-15%" }} />
      <div className="orb" style={{ width: 400, height: 400, background: "#8B6F47", bottom: "-10%", left: "-10%", animationDelay: "3s" }} />

      <div style={{ margin: "0 auto", maxWidth: "80rem", position: "relative" }}>
        <SectionHeading
          eyebrow="تواصل معنا"
          title={<>دعنا نبني <span className="gradient-text">شيئاً عظيماً</span> معاً.</>}
        />

        <div style={{ display: "grid", gap: "2rem" }} className="contact-grid">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
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
              <Magnetic type="submit" className="magnetic-btn" style={{ width: "fit-content" }}>
                {submitted ? "✓ تم الإرسال" : "إرسال الطلب →"}
              </Magnetic>
            </form>
          </Reveal>

          {/* Info cards */}
          <Reveal delay={0.15}>
            <div className="contact-info-panel" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", width: "100%" }}>
              {contactInfo.map((c, i) => (
                <div key={i} className="glass contact-info-card" style={{ borderRadius: "1rem", padding: "1.5rem", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{
                    width: "3rem", height: "3rem", borderRadius: "0.75rem", flexShrink: 0,
                    background: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(47,62,80,0.15))",
                    display: "grid", placeItems: "center", fontSize: "1.5rem", color: "var(--bronze)",
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.875rem", color: "color-mix(in srgb, var(--navy) 55%, transparent)" }}>{c.t}</div>
                    <div style={{ fontWeight: 700, marginTop: "0.25rem" }}>{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .contact-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .contact-grid { grid-template-columns: 55fr 45fr !important; }
        }
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; }
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
    </section>
  );
}
