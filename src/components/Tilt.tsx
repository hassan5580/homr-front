import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Tilt({ children, className = "", style = {} }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 12 });
  const sry = useSpring(ry, { stiffness: 150, damping: 12 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 12);
    rx.set(-py * 12);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
