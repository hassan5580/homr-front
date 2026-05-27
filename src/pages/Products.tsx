import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <div dir="rtl" lang="ar" style={{ position: "relative" }}>
      <div className="mesh-bg" />
      <div className="grain" />
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <section style={{ padding: "10rem 1.5rem 5rem" }}>
          <div style={{ margin: "0 auto", maxWidth: "80rem" }}>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "var(--bronze)", marginBottom: "0.75rem", fontFamily: "var(--font-mono)" }}>
              كتالوجنا
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)", fontWeight: 900, lineHeight: 1.15 }}>
              حلول تغليف <span className="gradient-text">دقيقة</span>
            </h1>
            <p style={{ marginTop: "1.5rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", maxWidth: "42rem", fontSize: "1.125rem" }}>
              تشكيلة متكاملة من منتجات الكرتون والتغليف، مصممة هندسياً وفق معايير ISO العالمية.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginTop: "3.5rem",
            }}>
              {products.map((p, i) => (
                <motion.article
                  key={p.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="glass glass-glow"
                  style={{
                    borderRadius: "1rem", padding: "2rem",
                    transition: "transform 0.3s",
                  }}
                  whileHover={{ y: -4 }}
                >
                  <span style={{
                    display: "inline-block",
                    fontSize: "0.625rem", letterSpacing: "0.25em", textTransform: "uppercase",
                    fontFamily: "var(--font-mono)", padding: "0.25rem 0.75rem",
                    borderRadius: "9999px", background: "rgba(47,62,80,0.08)",
                    color: "var(--bronze)", marginBottom: "1.25rem",
                  }}>
                    {p.tag}
                  </span>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 900 }}>{p.name}</h3>
                  <p style={{ marginTop: "0.75rem", color: "color-mix(in srgb, var(--navy) 70%, transparent)", lineHeight: 1.625 }}>{p.desc}</p>
                  <div style={{
                    marginTop: "1.5rem", color: "var(--bronze)", fontWeight: 700,
                    opacity: 0, transition: "opacity 0.3s",
                  }}
                    className="product-cta"
                  >
                    طلب عرض سعر ←
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        article:hover .product-cta { opacity: 1 !important; }
      `}</style>
    </div>
  );
}
