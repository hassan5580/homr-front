import { Link } from "react-router-dom";

const cols = [
  { t: "المنتجات", l: ["صناديق الشحن", "التغليف المخصص", "صناديق البيتزا", "معدات الحماية"] },
  { t: "الشركة", l: ["من نحن", "الاستدامة", "المسيرة المهنية", "الأخبار"] },
  { t: "الدعم", l: ["تواصل معنا", "الأسئلة الشائعة", "طلب عينة", "تتبع الطلب"] },
];

export default function Footer() {
  return (
    <footer style={{
      position: "relative",
      paddingTop: "5rem",
      paddingBottom: "2.5rem",
      padding: "5rem 1.5rem 2.5rem",
      borderTop: "1px solid rgba(47,62,80,0.08)",
      marginTop: "2.5rem",
    }}>
      {/* Top gradient line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(to right, transparent, rgba(249,115,22,0.5), transparent)",
      }} />

      <div style={{ margin: "0 auto", maxWidth: "80rem" }}>
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand-col">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{
                width: "2.5rem", height: "2.5rem",
                borderRadius: "0.75rem",
                background: "linear-gradient(135deg, var(--bronze), var(--navy))",
                display: "grid", placeItems: "center",
                fontWeight: 900, color: "#FFFFFF",
              }}>H</div>
              <span style={{ fontWeight: 900, fontSize: "1.25rem" }}>HomePack · هوم باك</span>
            </div>
            <p style={{
              marginTop: "1.25rem",
              color: "color-mix(in srgb, var(--navy) 65%, transparent)",
              maxWidth: "24rem", lineHeight: 1.625,
            }}>
              بيت صناعة الكرتون والتغليف الصناعي. نخدم العالم منذ ١٩٨٤.
            </p>
            <div className="footer-social-icons" style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              {["in", "X", "ig", "fb"].map((s) => (
                <a
                  key={s}
                  href="#"
                  data-hover
                  style={{
                    width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem",
                    background: "rgba(255,255,255,0.65)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(47,62,80,0.08)",
                    display: "grid", placeItems: "center",
                    color: "color-mix(in srgb, var(--navy) 70%, transparent)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--bronze)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "color-mix(in srgb, var(--navy) 70%, transparent)")}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.t} className="footer-link-col">
              <h4 style={{ fontWeight: 700, marginBottom: "1rem" }}>{c.t}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {c.l.map((x) => (
                  <li key={x}>
                    <a
                      href="#"
                      data-hover
                      style={{
                        color: "color-mix(in srgb, var(--navy) 65%, transparent)",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--bronze)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "color-mix(in srgb, var(--navy) 65%, transparent)")}
                    >
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="footer-newsletter-col">
            <h4 style={{ fontWeight: 700, marginBottom: "1rem" }}>النشرة البريدية</h4>
            <p style={{
              color: "color-mix(in srgb, var(--navy) 65%, transparent)",
              fontSize: "0.875rem", marginBottom: "0.75rem",
            }}>أحدث الأخبار في صناديقك.</p>
            <div style={{
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(47,62,80,0.08)",
              borderRadius: "9999px",
              padding: "0.25rem",
              display: "flex",
            }}>
              <input
                placeholder="بريدك"
                style={{
                  background: "transparent", padding: "0.5rem 0.75rem",
                  fontSize: "0.875rem", flex: 1, outline: "none", border: "none",
                  fontFamily: "var(--font-display)",
                }}
              />
              <button style={{
                background: "var(--bronze)", color: "#FFFFFF",
                borderRadius: "9999px", padding: "0 1rem",
                fontSize: "0.875rem", fontWeight: 700,
                border: "none", cursor: "pointer",
              }}>→</button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar" style={{
          marginTop: "3.5rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(47,62,80,0.08)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          fontSize: "0.75rem",
          color: "color-mix(in srgb, var(--navy) 40%, transparent)",
        }}>
          <div>© ٢٠٢٦ HomePack. جميع الحقوق محفوظة.</div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["سياسة الخصوصية", "الشروط والأحكام"].map((t) => (
              <a
                key={t}
                href="#"
                data-hover
                style={{
                  color: "inherit", textDecoration: "none", transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--bronze)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
          gap: 2.5rem;
        }
        .footer-brand-col {
          grid-column: span 1;
        }
        @media (max-width: 1200px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .footer-brand-col {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          .footer-brand-col {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .footer-brand-col {
            grid-column: span 1 !important;
            text-align: center !important;
          }
          .footer-brand-col > div:first-child {
            justify-content: center !important;
          }
          .footer-brand-col p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .footer-social-icons {
            justify-content: center !important;
          }
          .footer-link-col, .footer-newsletter-col {
            text-align: center !important;
          }
          .footer-link-col ul {
            align-items: center !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
