import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { faqs } from "../../data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ position: "relative", padding: "8rem 1.5rem" }}>
      <div style={{ margin: "0 auto", maxWidth: "56rem", width: "100%" }}>
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          title={<>كل ما تريد <span className="gradient-text">معرفته</span>.</>}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
          {faqs.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="glass" style={{ borderRadius: "1rem", overflow: "hidden", width: "100%" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    data-hover
                    className="faq-btn"
                    style={{
                      width: "100%", display: "flex", alignItems: "center",
                      justifyContent: "space-between", padding: "1.5rem",
                      textAlign: "right", background: "none", border: "none",
                      fontFamily: "var(--font-display)", cursor: "pointer",
                      minHeight: "44px",
                    }}
                  >
                    <span className="faq-question" style={{ fontWeight: 700, fontSize: "1.125rem", color: "var(--navy)" }}>{it.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      style={{ fontSize: "1.5rem", color: "var(--bronze)", fontWeight: 300, flexShrink: 0 }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="faq-panel" style={{
                          padding: "0 1.5rem 1.5rem",
                          color: "color-mix(in srgb, var(--navy) 70%, transparent)",
                          lineHeight: 1.625,
                        }}>
                          {it.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <style>{`
        .faq-question {
          font-size: clamp(16px, 2vw, 18px) !important;
        }
        @media (max-width: 767px) {
          .faq-btn {
            padding: 0.75rem !important; /* 12px padding */
          }
          .faq-panel {
            padding: 0 0.75rem 0.75rem !important; /* 12px padding */
          }
        }
      `}</style>
    </section>
  );
}
