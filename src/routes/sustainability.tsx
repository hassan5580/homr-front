import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar, Footer } from "./index";

export const Route = createFileRoute("/sustainability")({ component: SustainabilityPage });

function SustainabilityPage() {
  const stats = [
    { v: "85%", l: "خفض انبعاثات الكربون" },
    { v: "100%", l: "طاقة متجددة" },
    { v: "12M", l: "شجرة محفوظة سنوياً" },
    { v: "0", l: "مخلفات للمكب" },
  ];
  return (
    <main className="min-h-screen">
      <div className="mesh-bg" /><div className="grain" />
      <Navbar />
      <section className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-xs tracking-[0.3em] text-[color:var(--bronze)] mb-3 font-mono">الاستدامة</div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            نصنع التغليف <span className="gradient-text">دون أن نؤذي الكوكب</span>.
          </h1>
          <p className="mt-6 text-lg text-[color:var(--navy)]/70 max-w-3xl">
            كل ليفة كرتون في منتجاتنا قابلة لإعادة التدوير بالكامل، ومصدرها غابات تُدار وفق
            معايير FSC الدولية. الطاقة في مصانعنا متجددة ١٠٠٪، وعملياتنا خالية تماماً من
            المخلفات المُرسلة للمكبات.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
            {stats.map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-7 text-center">
                <div className="font-mono font-black text-5xl gradient-text">{s.v}</div>
                <div className="mt-3 text-sm text-[color:var(--navy)]/70">{s.l}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {[
              { t: "FSC معتمد", d: "كل المواد الخام من غابات مدارة بشكل مستدام ومعتمدة دولياً." },
              { t: "ISO 14001", d: "نظام إدارة بيئي معتمد يضمن التحسين المستمر لأدائنا البيئي." },
              { t: "Zero Waste", d: "إعادة استخدام ١٠٠٪ من المخلفات الصناعية داخل دورة الإنتاج." },
              { t: "Solar Powered", d: "مصنعنا الرئيسي يعمل بالكامل على الطاقة الشمسية منذ ٢٠٢٤." },
            ].map((c, i) => (
              <motion.div key={c.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass glass-glow rounded-2xl p-8">
                <h3 className="text-2xl font-black text-[color:var(--bronze)]">{c.t}</h3>
                <p className="mt-3 text-[color:var(--navy)]/70 leading-relaxed">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
