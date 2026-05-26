import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export const Route = createFileRoute("/")({ component: HomePack });

/* ============ Custom Cursor ============ */
function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 200, damping: 20 });
  const ry = useSpring(y, { stiffness: 200, damping: 20 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const mv = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-hover]"));
    };
    window.addEventListener("mousemove", mv);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", mv); window.removeEventListener("mouseover", over); };
  }, [x, y]);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-300 pointer-events-none z-[100] mix-blend-multiply"
      />
      <motion.div
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%", scale: hover ? 2 : 1 }}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[color:var(--bronze)]/60 pointer-events-none z-[100] mix-blend-multiply"
      />
    </>
  );
}

/* ============ Magnetic Button ============ */
function Magnetic({ children, className = "", as = "button", ...props }: any) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const Comp: any = motion[as as keyof typeof motion] || motion.button;
  return (
    <Comp ref={ref as any} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x: sx, y: sy }} className={className} {...props}>
      {children}
    </Comp>
  );
}

/* ============ Tilt Card ============ */
function Tilt({ children, className = "" }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 12 });
  const sry = useSpring(ry, { stiffness: 150, damping: 12 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 12); rx.set(-py * 12);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============ Counter ============ */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString("ar-EG")}{suffix}</span>;
}

/* ============ Navbar ============ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", on); return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    { href: "#features", label: "المميزات" },
    { href: "#products", label: "المنتجات" },
    { href: "#process", label: "آلية العمل" },
    { href: "#testimonials", label: "آراء العملاء" },
    { href: "#contact", label: "تواصل" },
  ];
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
    >
      <div className={`mx-auto max-w-7xl px-6 flex items-center justify-between rounded-full transition-all duration-500 ${scrolled ? "glass py-3 px-6" : ""}`}>
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[color:var(--bronze)] to-[color:var(--navy)] grid place-items-center font-black text-[#FFFFFF]">H</div>
          <span className="font-black text-lg tracking-tight">HomePack · هوم باك</span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm text-[color:var(--navy)]/80">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-[color:var(--bronze)] transition" data-hover>{l.label}</a>
          ))}
        </div>
        <Magnetic as="a" href="#contact" className="magnetic-btn !py-2.5 !px-5 text-sm hidden sm:inline-block">
          طلب سعر
        </Magnetic>
      </div>
    </motion.nav>
  );
}

/* ============ Hero ============ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [light, setLight] = useState({ x: 50, y: 50 });
  const onMove = (e: React.MouseEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setLight({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(600px circle at ${light.x}% ${light.y}%, rgba(0,212,255,0.18), transparent 40%)`,
      }}
    >
      <div className="orb" style={{ width: 500, height: 500, background: "#8B6F47", top: -100, right: -100 }} />
      <div className="orb" style={{ width: 400, height: 400, background: "#2F3E50", bottom: -80, left: -100, animationDelay: "3s" }} />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center w-full">
        <motion.div style={{ y: y1 }} className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-[color:var(--bronze)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[color:var(--bronze)] animate-pulse" />
            صناعة سعودية · منذ ١٩٨٤ · ISO 9001
          </motion.div>

          <h1 className="font-black leading-[1.05] text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight">
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="block">
              بيت صناعة
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }} className="block gradient-text">
              الكرتون والتغليف
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="mt-7 text-lg md:text-xl text-[color:var(--navy)]/70 max-w-xl leading-relaxed"
          >
            حلول تغليف صناعية متطورة، صديقة للبيئة، مصممة لأعمالك اللوجستية حول العالم. من التصميم إلى التسليم — جودة لا تساوم.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic as="a" href="#contact" className="magnetic-btn">اطلب عرض سعر ←</Magnetic>
            <Magnetic as="a" href="#products" className="ghost-btn">تصفّح المنتجات</Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
            className="mt-12 flex flex-wrap gap-6 text-sm text-[color:var(--navy)]/65"
          >
            {[
              { k: "ISO", v: "9001 معتمد" },
              { k: "1984", v: "تأسست منذ" },
              { k: "+40", v: "دولة حول العالم" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-11 h-11 grid place-items-center rounded-xl glass">
                  <span className="font-mono font-bold text-[color:var(--bronze)] text-xs">{b.k}</span>
                </div>
                <div className="text-[color:var(--navy)]/80">{b.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="lg:col-span-5 hidden lg:flex justify-center items-center min-h-[480px] [perspective:1200px]">
          <div className="box3d relative" style={{ width: 220, height: 220 }}>
            <div className="face front" />
            <div className="face back" />
            <div className="face left" />
            <div className="face right" />
            <div className="face top" />
            <div className="face bottom" />
          </div>
          {/* glow */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-[color:var(--bronze)]/20 blur-3xl pointer-events-none" />
        </motion.div>
      </motion.div>

      <WaveDivider />
    </section>
  );
}

function WaveDivider() {
  return (
    <div className="wave-divider absolute bottom-0 inset-x-0 z-0">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wg" x1="0" x2="1">
            <stop offset="0" stopColor="#8B6F47" stopOpacity="0.25" />
            <stop offset="1" stopColor="#2F3E50" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <path d="M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z" fill="url(#wg)">
          <animate attributeName="d" dur="9s" repeatCount="indefinite"
            values="M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z;
                    M0,40 C400,0 900,80 1440,40 L1440,80 L0,80 Z;
                    M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z" />
        </path>
      </svg>
    </div>
  );
}

/* ============ Section wrapper with reveal ============ */
function Reveal({ children, delay = 0, className = "" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, sub }: any) {
  return (
    <div className="max-w-3xl mb-14">
      <Reveal>
        <div className="text-xs tracking-[0.3em] text-[color:var(--bronze)] mb-3 font-mono">{eyebrow}</div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-[color:var(--navy)]/70 text-lg leading-relaxed">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ============ Features ============ */
function Features() {
  const items = [
    { icon: "◆", title: "متانة استثنائية", desc: "كرتون مقوى متعدد الطبقات يتحمل الشحن الدولي وأقسى ظروف النقل.", color: "#8B6F47" },
    { icon: "♻", title: "صديق للبيئة", desc: "١٠٠٪ قابل لإعادة التدوير، مصنوع من ألياف معاد تدويرها بمعايير عالمية.", color: "#2F3E50" },
    { icon: "⚡", title: "توصيل سريع", desc: "شبكة لوجستية تغطي ٤٠+ دولة، تسليم خلال ٤٨ ساعة محلياً.", color: "#F5A623" },
  ];
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="لماذا HomePack"
          title={<>صناعة تُلامس <span className="gradient-text">الكمال</span>.</>}
          sub="كل صندوق يخرج من خطوط إنتاجنا يحمل أربعة عقود من الخبرة والابتكار."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Tilt>
                <div className="glass glass-glow rounded-3xl p-8 h-full relative overflow-hidden group">
                  <div
                    className="absolute -top-10 -left-10 w-32 h-32 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition"
                    style={{ background: it.color }}
                  />
                  <div className="relative">
                    <div className="text-5xl mb-6" style={{ color: it.color, textShadow: `0 0 30px ${it.color}` }}>{it.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{it.title}</h3>
                    <p className="text-[color:var(--navy)]/70 leading-relaxed">{it.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-[color:var(--bronze)] opacity-0 group-hover:opacity-100 transition">
                      <span>اعرف المزيد</span> <span>←</span>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Products ============ */
function Products() {
  const items = [
    { name: "صناديق الشحن", tag: "الأكثر طلباً", desc: "صناديق مقواة لشحن دولي آمن.", gradient: "from-[color:var(--navy)]/20 to-[color:var(--navy)]/40", span: "md:col-span-2 md:row-span-2", h: "h-[460px]" },
    { name: "التغليف المخصص", tag: "تصميم حصري", desc: "اطبع علامتك التجارية بدقة عالية.", gradient: "from-[color:var(--bronze)]/25 to-[color:var(--bronze)]/10", span: "md:col-span-2", h: "h-[220px]" },
    { name: "صناديق البيتزا", tag: "مطاعم", desc: "كرتون عازل للحرارة، طباعة فاخرة.", gradient: "from-[color:var(--bronze)]/30 to-[color:var(--bronze)]/15", span: "", h: "h-[220px]" },
    { name: "معدات الحماية", tag: "حلول صناعية", desc: "حشوات ووسائد امتصاص الصدمات.", gradient: "from-[color:var(--navy)]/20 to-[color:var(--bronze)]/15", span: "", h: "h-[220px]" },
  ];
  return (
    <section id="products" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="المنتجات"
          title={<>تشكيلة <span className="gradient-text">متكاملة</span> لكل صناعة.</>}
          sub="من الصندوق البسيط إلى حلول التغليف الذكية — لدينا ما تحتاجه."
        />
        <div className="grid md:grid-cols-4 grid-rows-[auto] gap-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08} className={`${it.span}`}>
              <Tilt className={`group relative ${it.h} rounded-3xl overflow-hidden glass glass-glow`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${it.gradient}`} />
                {/* abstract box pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" preserveAspectRatio="none">
                  <g stroke="white" fill="none" strokeWidth="0.5">
                    {[...Array(8)].map((_, k) => (
                      <rect key={k} x={50 + k * 15} y={50 + k * 12} width={200} height={140} transform={`rotate(${k * 2} 200 150)`} />
                    ))}
                  </g>
                </svg>
                <div className="relative h-full p-7 flex flex-col justify-end">
                  <span className="inline-block self-start text-[10px] tracking-[0.25em] uppercase font-mono px-3 py-1 rounded-full bg-[color:var(--navy)]/8 text-[color:var(--bronze)] mb-3">{it.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-black">{it.name}</h3>
                  <p className="mt-2 text-[color:var(--navy)]/70 text-sm">{it.desc}</p>
                  <div className="absolute top-5 left-5 w-10 h-10 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition translate-x-2 group-hover:translate-x-0">
                    <span className="text-[color:var(--bronze)]">↗</span>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Stats ============ */
function Stats() {
  const stats = [
    { v: 40, suf: "+", l: "سنة خبرة" },
    { v: 10000, suf: "+", l: "عميل حول العالم" },
    { v: 50, suf: "+", l: "دولة وصلنا إليها" },
    { v: 100, suf: "%", l: "قابل لإعادة التدوير" },
  ];
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative glass rounded-[2rem] p-12 md:p-16 overflow-hidden">
          <div className="orb" style={{ width: 400, height: 400, background: "#2F3E50", top: -100, right: -100 }} />
          <div className="orb" style={{ width: 300, height: 300, background: "#8B6F47", bottom: -80, left: -50, animationDelay: "4s" }} />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center md:text-right">
                  <div className="text-5xl md:text-6xl font-black gradient-text font-mono">
                    <Counter to={s.v} suffix={s.suf} />
                  </div>
                  <div className="mt-3 text-[color:var(--navy)]/70 text-sm md:text-base">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Process ============ */
function Process() {
  const steps = [
    { n: "01", t: "استشارة وتصميم", d: "نناقش احتياجاتك ونصمم الحل الأمثل." },
    { n: "02", t: "إنتاج بدقة عالية", d: "خطوط إنتاج آلية بمعايير ISO الدولية." },
    { n: "03", t: "تسليم سريع وآمن", d: "شبكتنا اللوجستية توصل في الموعد." },
  ];
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="آلية العمل"
          title={<>ثلاث خطوات لـ <span className="gradient-text">تغليف متقن</span>.</>}
        />
        <div className="relative grid md:grid-cols-3 gap-8">
          {/* connecting line */}
          <div className="hidden md:block absolute top-12 right-[16%] left-[16%] h-px">
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4 }}
              className="h-full origin-right bg-gradient-to-l from-[color:var(--bronze)] via-[color:var(--bronze)]/60 to-[color:var(--navy)]/60"
            />
          </div>
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="text-center md:text-right">
                <div className="relative inline-grid mb-6">
                  <div className="w-24 h-24 rounded-2xl glass glass-glow grid place-items-center font-mono font-black text-3xl gradient-text">
                    {s.n}
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{s.t}</h3>
                <p className="mt-3 text-[color:var(--navy)]/70">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Testimonials ============ */
function Testimonials() {
  const items = [
    { name: "خالد العمري", role: "مدير المشتريات · أرامكو السعودية", q: "تعاملنا مع HomePack لخمس سنوات. الجودة ثابتة والتسليم لم يتأخر يوماً واحداً." },
    { name: "Sarah Mitchell", role: "Logistics Head · DHL MENA", q: "أفضل شريك تغليف صناعي في المنطقة. مرونة في التصميم ودقة في التنفيذ." },
    { name: "أحمد بن سالم", role: "مؤسس · سلال الذهب", q: "غيّرنا مورد الكرتون لـ HomePack وكان قرار صحيح ١٠٠٪. عبواتنا أصبحت تتحدث عنا." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="testimonials" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="آراء العملاء"
          title={<>يثق بنا <span className="gradient-text">قادة الصناعة</span>.</>}
        />
        <div className="relative h-[320px] md:h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 glass glass-glow rounded-3xl p-10 md:p-14 flex flex-col justify-center"
            >
              <div className="flex gap-1 text-[color:var(--bronze)] mb-5 text-xl">{"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}</div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">"{items[i].q}"</p>
              <div className="mt-6">
                <div className="font-bold">{items[i].name}</div>
                <div className="text-[color:var(--navy)]/55 text-sm">{items[i].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${i === k ? "w-10 bg-[color:var(--bronze)]" : "w-4 bg-white/20"}`}
              aria-label={`اختر شهادة ${k + 1}`}
            />
          ))}
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-10 opacity-60">
          {["ARAMCO", "DHL", "SABIC", "AGTHIA", "ALMARAI", "FedEx"].map(n => (
            <span key={n} className="font-mono font-bold tracking-widest text-[color:var(--navy)]/50 hover:text-[color:var(--bronze)] transition" data-hover>{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Sustainability ============ */
function Sustainability() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 glass">
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--bronze)]/15 via-[color:var(--bronze)]/8 to-[color:var(--navy)]/12" />
          <div className="orb" style={{ width: 350, height: 350, background: "#8B6F47", top: -80, left: -80 }} />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs tracking-[0.3em] text-[color:var(--bronze)] mb-3 font-mono">الاستدامة</div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                نصنع التغليف <span className="gradient-text">دون أن نؤذي الكوكب</span>.
              </h2>
              <p className="mt-5 text-[color:var(--navy)]/70 leading-relaxed">
                نلتزم بأعلى معايير الاستدامة البيئية في كل خطوة من سلسلة الإنتاج، من اختيار المواد إلى الطاقة المتجددة.
              </p>
              <Magnetic as="a" href="#contact" className="ghost-btn mt-8 inline-block">اطّلع على تقريرنا البيئي</Magnetic>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { v: 85, suf: "%", l: "خفض انبعاثات الكربون" },
                { v: 12, suf: "م", l: "شجرة حُفظت سنوياً" },
                { v: 100, suf: "%", l: "طاقة متجددة" },
                { v: 0, suf: "", l: "مخلفات للمكب" },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="glass rounded-2xl p-6">
                    <div className="font-mono font-black text-4xl gradient-text"><Counter to={s.v} suffix={s.suf} /></div>
                    <div className="mt-2 text-sm text-[color:var(--navy)]/70">{s.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ CTA Banner ============ */
function CTABanner() {
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl relative rounded-[2rem] overflow-hidden p-14 md:p-24 text-center glass glass-glow">
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--bronze)]/15 via-[color:var(--bronze)]/20 to-[color:var(--navy)]/15" />
        <div className="orb" style={{ width: 500, height: 500, background: "#8B6F47", top: "-30%", left: "20%", opacity: 0.3 }} />
        <div className="relative">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              جاهز لتحسين <span className="gradient-text">خدماتك اللوجستية؟</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[color:var(--navy)]/70 text-lg max-w-2xl mx-auto">ابدأ مع HomePack اليوم. عرض سعر مخصص خلال ٢٤ ساعة.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Magnetic as="a" href="#contact" className="magnetic-btn text-lg !py-4 !px-8">احصل على عرض سعر مجاني</Magnetic>
              <Magnetic as="a" href="tel:+966" className="ghost-btn text-lg !py-4 !px-8">+966 11 000 0000</Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
function FAQ() {
  const items = [
    { q: "ما هي الحد الأدنى للطلبية؟", a: "نقبل طلبات من ٥٠٠ وحدة فأكثر للطلبات المخصصة، وأقل للمنتجات الجاهزة." },
    { q: "هل تشحنون خارج المملكة؟", a: "نعم، نشحن إلى أكثر من ٤٠ دولة حول العالم عبر شراكاتنا اللوجستية." },
    { q: "ما هي مدة التسليم؟", a: "من ٤٨ ساعة للطلبات المحلية، ومن ٧ إلى ١٤ يوماً للشحن الدولي." },
    { q: "هل يمكن تخصيص التصميم والطباعة؟", a: "نعم، فريق التصميم لدينا يعمل معك من المفهوم حتى المنتج النهائي." },
    { q: "هل المنتجات صديقة للبيئة فعلاً؟", a: "كل منتجاتنا قابلة لإعادة التدوير ١٠٠٪ ومعتمدة بشهادات FSC العالمية." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          title={<>كل ما تريد <span className="gradient-text">معرفته</span>.</>}
        />
        <div className="space-y-4">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="glass rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-right"
                    data-hover
                  >
                    <span className="font-bold text-lg">{it.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-2xl text-[color:var(--bronze)] font-light">+</motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-[color:var(--navy)]/70 leading-relaxed">{it.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ Contact ============ */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="orb" style={{ width: 500, height: 500, background: "#2F3E50", top: "10%", right: "-15%" }} />
      <div className="orb" style={{ width: 400, height: 400, background: "#8B6F47", bottom: "-10%", left: "-10%", animationDelay: "3s" }} />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeading
          eyebrow="تواصل معنا"
          title={<>دعنا نبني <span className="gradient-text">شيئاً عظيماً</span> معاً.</>}
        />
        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="glass glass-glow rounded-3xl p-8 md:p-10 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="الاسم الكامل" name="name" />
                <Field label="البريد الإلكتروني" name="email" type="email" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="اسم الشركة" name="company" />
                <Field label="رقم الهاتف" name="phone" type="tel" />
              </div>
              <div>
                <label className="block text-xs text-[color:var(--navy)]/65 mb-2 tracking-wider">رسالتك</label>
                <textarea
                  rows={5}
                  className="w-full bg-white/60 border border-[color:var(--navy)]/12 rounded-xl px-4 py-3 outline-none focus:border-[color:var(--bronze)] transition resize-none"
                />
              </div>
              <Magnetic type="submit" className="magnetic-btn w-full md:w-auto">
                {submitted ? "✓ تم الإرسال" : "إرسال الطلب →"}
              </Magnetic>
            </form>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-2 space-y-5">
            {[
              { icon: "✆", t: "اتصل بنا", d: "+966 11 000 0000" },
              { icon: "✉", t: "راسلنا", d: "sales@homepack.sa" },
              { icon: "⌖", t: "زرنا", d: "المدينة الصناعية الثانية، الرياض" },
            ].map((c, i) => (
              <div key={i} className="glass rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--bronze)]/20 to-[color:var(--navy)]/15 grid place-items-center text-2xl text-[color:var(--bronze)]">{c.icon}</div>
                <div>
                  <div className="text-sm text-[color:var(--navy)]/55">{c.t}</div>
                  <div className="font-bold mt-1">{c.d}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: any) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs text-[color:var(--navy)]/65 mb-2 tracking-wider">{label}</label>
      <input
        id={name} name={name} type={type}
        className="w-full bg-white/60 border border-[color:var(--navy)]/12 rounded-xl px-4 py-3 outline-none focus:border-[color:var(--bronze)] transition"
      />
    </div>
  );
}

/* ============ Footer ============ */
function Footer() {
  const cols = [
    { t: "المنتجات", l: ["صناديق الشحن", "التغليف المخصص", "صناديق البيتزا", "معدات الحماية"] },
    { t: "الشركة", l: ["من نحن", "الاستدامة", "المسيرة المهنية", "الأخبار"] },
    { t: "الدعم", l: ["تواصل معنا", "الأسئلة الشائعة", "طلب عينة", "تتبع الطلب"] },
  ];
  return (
    <footer className="relative pt-20 pb-10 px-6 border-t border-[color:var(--navy)]/8 mt-10">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[color:var(--bronze)]/50 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[color:var(--bronze)] to-[color:var(--navy)] grid place-items-center font-black text-[#FFFFFF]">H</div>
              <span className="font-black text-xl">HomePack · هوم باك</span>
            </div>
            <p className="mt-5 text-[color:var(--navy)]/65 max-w-sm leading-relaxed">
              بيت صناعة الكرتون والتغليف الصناعي. نخدم العالم منذ ١٩٨٤.
            </p>
            <div className="flex gap-3 mt-6">
              {["in", "X", "ig", "fb"].map(s => (
                <a key={s} href="#" data-hover className="w-10 h-10 rounded-xl glass grid place-items-center text-[color:var(--navy)]/70 hover:text-[color:var(--bronze)] transition font-mono text-sm">{s}</a>
              ))}
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i} className="md:col-span-2">
              <h4 className="font-bold mb-4">{c.t}</h4>
              <ul className="space-y-3 text-[color:var(--navy)]/65 text-sm">
                {c.l.map(x => <li key={x}><a href="#" data-hover className="hover:text-[color:var(--bronze)] transition">{x}</a></li>)}
              </ul>
            </div>
          ))}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4">النشرة البريدية</h4>
            <p className="text-[color:var(--navy)]/65 text-sm mb-3">أحدث الأخبار في صناديقك.</p>
            <div className="glass rounded-full p-1 flex">
              <input placeholder="بريدك" className="bg-transparent px-3 py-2 text-sm flex-1 outline-none" />
              <button className="bg-[color:var(--bronze)] text-[#FFFFFF] rounded-full px-4 text-sm font-bold">→</button>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-[color:var(--navy)]/8 flex flex-wrap justify-between items-center gap-4 text-xs text-[color:var(--navy)]/40">
          <div>© ٢٠٢٦ HomePack. جميع الحقوق محفوظة.</div>
          <div className="flex gap-6">
            <a href="#" data-hover className="hover:text-[color:var(--bronze)]">سياسة الخصوصية</a>
            <a href="#" data-hover className="hover:text-[color:var(--bronze)]">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============ Loader ============ */
function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setDone(true), 1600); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-[#FFFFFF]"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[color:var(--bronze)] to-[color:var(--navy)] grid place-items-center font-black text-3xl text-[#FFFFFF] mb-5">H</div>
            <div className="font-black text-2xl gradient-text">HomePack</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============ Page ============ */
function HomePack() {
  return (
    <div dir="rtl" lang="ar" className="relative">
      <div className="mesh-bg" />
      <div className="grain" />
      <Loader />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <Stats />
        <Process />
        <Testimonials />
        <Sustainability />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
