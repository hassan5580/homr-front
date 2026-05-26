import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar, Footer } from "./index";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="mesh-bg" /><div className="grain" />
      <Navbar />
      <section className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-xs tracking-[0.3em] text-[color:var(--bronze)] mb-3 font-mono">من نحن</div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            أربعة عقود من <span className="gradient-text">الحرفة الصناعية</span>.
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 text-lg text-[color:var(--navy)]/75 leading-loose">
            تأسست HomePack — هوم باك عام ١٩٨٤ كبيت متخصص في صناعة الكرتون والتغليف الصناعي.
            على مدى أربعين عاماً، خدمنا أكثر من ١٠٬٠٠٠ عميل في ٥٠ دولة، وأصبحنا الشريك الموثوق
            لكبرى شركات الخدمات اللوجستية والصناعات الغذائية والتجزئة في المنطقة والعالم.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { t: "رسالتنا", d: "تقديم حلول تغليف هندسية تجمع بين المتانة والاستدامة والجمال." },
              { t: "رؤيتنا", d: "أن نكون المرجع الأول في صناعة التغليف الصناعي في الشرق الأوسط." },
              { t: "قيمنا", d: "الإتقان، الشفافية، الاحترام للبيئة، والالتزام بالموعد." },
            ].map((c, i) => (
              <motion.div key={c.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8">
                <h3 className="text-xl font-black text-[color:var(--bronze)]">{c.t}</h3>
                <p className="mt-3 text-[color:var(--navy)]/70 leading-relaxed">{c.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-4 gap-4">
            {[
              { y: "1984", t: "تأسيس HomePack في الرياض" },
              { y: "1998", t: "أول خط إنتاج آلي بمعايير ISO" },
              { y: "2010", t: "التوسع لأكثر من ٢٠ دولة" },
              { y: "2024", t: "الانتقال الكامل للطاقة المتجددة" },
            ].map((m, i) => (
              <motion.div key={m.y} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-r-2 border-[color:var(--bronze)] pr-5">
                <div className="font-mono font-black text-3xl text-[color:var(--bronze)]">{m.y}</div>
                <div className="text-sm text-[color:var(--navy)]/70 mt-2">{m.t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
