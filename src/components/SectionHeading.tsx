import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}

export default function SectionHeading({ eyebrow, title, sub }: SectionHeadingProps) {
  return (
    <div style={{ maxWidth: "48rem", marginBottom: "3.5rem" }}>
      <Reveal>
        <div style={{
          fontSize: "0.75rem",
          letterSpacing: "0.3em",
          color: "var(--bronze)",
          marginBottom: "0.75rem",
          fontFamily: "var(--font-mono)",
        }}>
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 style={{
          fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
          fontWeight: 900,
          lineHeight: 1.15,
        }}>
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.2}>
          <p style={{
            marginTop: "1.25rem",
            color: "color-mix(in srgb, var(--navy) 70%, transparent)",
            fontSize: "1.125rem",
            lineHeight: 1.625,
          }}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
