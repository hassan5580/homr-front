import { useState, useEffect } from "react";
import SectionHeading from "../../components/SectionHeading";
import { testimonials } from "../../data/testimonials";

const logos = ["ARAMCO", "DHL", "SABIC", "AGTHIA", "ALMARAI", "FedEx"];

const InitialsAvatar = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);
  return (
    <div className="testimonial-avatar" style={{
      width: "50px", height: "50px", borderRadius: "50%",
      background: "linear-gradient(135deg, var(--bronze), var(--navy))",
      display: "grid", placeItems: "center", color: "#FFFFFF",
      fontWeight: "bold", fontSize: "1.1rem", flexShrink: 0,
      transition: "all 0.3s"
    }}>
      {initials}
    </div>
  );
};

const TestimonialCard = ({ testimonial, isFocused }: { testimonial: any; isFocused: boolean }) => {
  return (
    <div
      className={`glass testimonial-card ${isFocused ? "focused" : ""}`}
      style={{
        borderRadius: "1.5rem",
        padding: "2.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        transition: "all 0.4s ease",
        border: isFocused ? "1.5px solid var(--bronze)" : "1px solid rgba(47,62,80,0.08)",
        boxShadow: isFocused ? "0 20px 40px -15px rgba(249,115,22,0.25)" : "0 10px 40px -20px rgba(47,62,80,0.18)",
      }}
    >
      <div className="card-header-wrapper" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <InitialsAvatar name={testimonial.name} />
        <div style={{ textAlign: "right" }}>
          <div style={{ display: "flex", gap: "0.15rem", color: "var(--bronze)", fontSize: "0.875rem" }}>
            {"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}
          </div>
          <h4 style={{ fontWeight: 700, fontSize: "1.1rem", marginTop: "0.25rem", color: "var(--navy)" }}>{testimonial.name}</h4>
          <p style={{ color: "color-mix(in srgb, var(--navy) 55%, transparent)", fontSize: "0.75rem" }}>{testimonial.role}</p>
        </div>
      </div>
      <p style={{ marginTop: "1.5rem", fontSize: "1rem", lineHeight: 1.625, fontStyle: "italic", color: "var(--navy)", flexGrow: 1, textAlign: "right" }}>
        "{testimonial.q}"
      </p>
    </div>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveIndex((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const nextSlide = () => setActiveIndex((p) => (p + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  const leftIdx = (activeIndex - 1 + testimonials.length) % testimonials.length;
  const centerIdx = activeIndex;
  const rightIdx = (activeIndex + 1) % testimonials.length;

  return (
    <section id="testimonials" style={{ position: "relative", padding: "8rem 1.5rem" }}>
      <div style={{ margin: "0 auto", maxWidth: "80rem" }}>
        <SectionHeading
          eyebrow="آراء العملاء"
          title={<>يثق بنا <span className="gradient-text">قادة الصناعة</span>.</>}
        />

        {/* Slider with side controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", position: "relative" }}>
          {/* Prev Arrow (Right in RTL context represents previous) */}
          <button
            onClick={prevSlide}
            aria-label="الشهادة السابقة"
            className="slider-arrow-btn"
            style={{
              width: "48px", height: "48px", borderRadius: "50%",
              border: "1px solid rgba(47,62,80,0.12)", background: "rgba(255,255,255,0.75)",
              display: "grid", placeItems: "center", cursor: "pointer",
              zIndex: 10, flexShrink: 0, transition: "all 0.2s", padding: 0
            }}
          >
            <span style={{ fontSize: "1.25rem", color: "var(--navy)", fontWeight: "bold" }}>→</span>
          </button>

          {/* Cards container */}
          <div style={{ flexGrow: 1, position: "relative", overflow: "hidden", padding: "1.5rem 0.5rem" }}>
            <div className="testimonials-slider-container">
              {/* Card left */}
              <div className="slider-card left-card">
                <TestimonialCard testimonial={testimonials[leftIdx]} isFocused={false} />
              </div>
              {/* Card center */}
              <div className="slider-card center-card">
                <TestimonialCard testimonial={testimonials[centerIdx]} isFocused={true} />
              </div>
              {/* Card right */}
              <div className="slider-card right-card">
                <TestimonialCard testimonial={testimonials[rightIdx]} isFocused={false} />
              </div>
            </div>
          </div>

          {/* Next Arrow (Left in RTL context represents next) */}
          <button
            onClick={nextSlide}
            aria-label="الشهادة التالية"
            className="slider-arrow-btn"
            style={{
              width: "48px", height: "48px", borderRadius: "50%",
              border: "1px solid rgba(47,62,80,0.12)", background: "rgba(255,255,255,0.75)",
              display: "grid", placeItems: "center", cursor: "pointer",
              zIndex: 10, flexShrink: 0, transition: "all 0.2s", padding: 0
            }}
          >
            <span style={{ fontSize: "1.25rem", color: "var(--navy)", fontWeight: "bold" }}>←</span>
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.25rem", marginTop: "1rem" }}>
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setActiveIndex(k)}
              aria-label={`اختر شهادة ${k + 1}`}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "18px 8px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  height: "0.5rem",
                  width: activeIndex === k ? "2.5rem" : "1rem",
                  borderRadius: "9999px",
                  background: activeIndex === k ? "var(--bronze)" : "rgba(47,62,80,0.2)",
                  transition: "all 0.3s",
                  display: "block",
                }}
              />
            </button>
          ))}
        </div>

        {/* Client logos */}
        <div style={{ marginTop: "3.5rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2.5rem", opacity: 0.6 }}>
          {logos.map((n) => (
            <span
              key={n}
              data-hover
              style={{
                fontFamily: "var(--font-mono)", fontWeight: 700,
                letterSpacing: "0.1em",
                color: "color-mix(in srgb, var(--navy) 50%, transparent)",
                transition: "color 0.2s", cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--bronze)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "color-mix(in srgb, var(--navy) 50%, transparent)")}
            >
              {n}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .slider-arrow-btn:hover {
          background: var(--navy) !important;
          border-color: var(--navy) !important;
        }
        .slider-arrow-btn:hover span {
          color: var(--cream) !important;
        }
        .testimonials-slider-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: center;
        }
        .center-card {
          transform: scale(1.05);
          z-index: 2;
        }
        .left-card, .right-card {
          transform: scale(0.9);
          opacity: 0.65;
        }
        @media (max-width: 1023px) {
          .testimonials-slider-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          .right-card {
            display: none !important;
          }
          .left-card, .center-card {
            transform: none !important;
            opacity: 1 !important;
          }
        }
        @media (max-width: 767px) {
          .testimonials-slider-container {
            grid-template-columns: 1fr !important;
          }
          .left-card {
            display: none !important;
          }
          .card-header-wrapper {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .testimonial-avatar {
            width: 64px !important;
            height: 64px !important;
            margin-bottom: 0.5rem;
          }
          .testimonial-card {
            padding: 1.5rem !important;
          }
        }
        @media (max-width: 480px) {
          .slider-arrow-btn {
            width: 44px !important;
            height: 44px !important;
          }
        }
      `}</style>
    </section>
  );
}
