import Reveal from "../../components/Reveal";
import Tilt from "../../components/Tilt";
import SectionHeading from "../../components/SectionHeading";
import { homeProducts } from "../../data/products";

export default function Products() {
  return (
    <section id="products" style={{ position: "relative", padding: "8rem 1.5rem" }}>
      <div style={{ margin: "0 auto", maxWidth: "80rem" }}>
        <SectionHeading
          eyebrow="المنتجات"
          title={<>تشكيلة <span className="gradient-text">متكاملة</span> لكل صناعة.</>}
          sub="من الصندوق البسيط إلى حلول التغليف الذكية — لدينا ما تحتاجه."
        />
        <div className="products-grid" style={{ display: "grid", gap: "1.25rem" }}>
          {homeProducts.map((it, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              style={i === 0 ? { gridColumn: "span 2", gridRow: "span 2" } : i === 1 ? { gridColumn: "span 2" } : {}}
            >
              <Tilt
                className="group glass glass-glow product-card-tilt"
                style={{
                  position: "relative",
                  height: it.height,
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  display: "block",
                }}
              >
                {/* Gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: it.gradient }} />
                {/* Abstract box pattern */}
                <svg
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.2 }}
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <g stroke="white" fill="none" strokeWidth="0.5">
                    {[...Array(8)].map((_, k) => (
                      <rect
                        key={k}
                        x={50 + k * 15}
                        y={50 + k * 12}
                        width={200}
                        height={140}
                        transform={`rotate(${k * 2} 200 150)`}
                      />
                    ))}
                  </g>
                </svg>
                {/* Content */}
                <div className="product-card-content" style={{
                  position: "relative", height: "100%", padding: "1.75rem",
                  display: "flex", flexDirection: "column", justifyContent: "flex-end",
                }}>
                  <span style={{
                    display: "inline-block", alignSelf: "flex-start",
                    fontSize: "0.625rem", letterSpacing: "0.25em", textTransform: "uppercase",
                    fontFamily: "var(--font-mono)", padding: "0.25rem 0.75rem",
                    borderRadius: "9999px", background: "rgba(47,62,80,0.08)",
                    color: "var(--bronze)", marginBottom: "0.75rem",
                  }}>
                    {it.tag}
                  </span>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 900 }}>{it.name}</h3>
                  <p style={{ marginTop: "0.5rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", fontSize: "0.875rem" }}>{it.desc}</p>
                  {/* Hover arrow */}
                  <div style={{
                    position: "absolute", top: "1.25rem", left: "1.25rem",
                    width: "2.5rem", height: "2.5rem", borderRadius: "50%",
                    background: "rgba(255,255,255,0.65)", backdropFilter: "blur(14px)",
                    display: "grid", placeItems: "center",
                    opacity: 0, transition: "opacity 0.3s, transform 0.3s",
                    transform: "translateX(0.5rem)",
                  }}
                    className="product-arrow"
                  >
                    <span style={{ color: "var(--bronze)" }}>↗</span>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .group:hover .product-arrow {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        .products-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1023px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .products-grid > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          .product-card-tilt {
            height: auto !important;
            min-height: 250px;
          }
          .product-card-content {
            padding: 1.5rem !important;
          }
        }
        @media (max-width: 767px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
          .products-grid > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          .product-card-tilt {
            height: auto !important;
            min-height: 200px;
            width: 100% !important;
          }
          .product-card-content {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
