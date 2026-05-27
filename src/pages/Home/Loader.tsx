import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            display: "grid", placeItems: "center",
            background: "#FFFFFF",
          }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: "center" }}
          >
            <div style={{
              width: "5rem", height: "5rem", margin: "0 auto",
              borderRadius: "1rem",
              background: "linear-gradient(135deg, var(--bronze), var(--navy))",
              display: "grid", placeItems: "center",
              fontWeight: 900, fontSize: "1.875rem", color: "#FFFFFF",
              marginBottom: "1.25rem",
            }}>
              H
            </div>
            <div className="gradient-text" style={{ fontWeight: 900, fontSize: "1.5rem" }}>
              HomePack
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
