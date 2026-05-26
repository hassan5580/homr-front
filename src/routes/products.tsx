import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar, Footer } from "./index";

export const Route = createFileRoute("/products")({ component: ProductsPage });

const products = [
  { name: "صناديق شحن صناعية", tag: "الأكثر طلباً", desc: "كرتون مموج خماسي الطبقات لتحمل الشحن الدولي والأحمال الثقيلة." },
  { name: "تغليف مخصص", tag: "تصميم حصري", desc: "اطبع هويتك التجارية بدقة فلكسو وأوفست عالية." },
  { name: "صناديق البيتزا والمطاعم", tag: "F&B", desc: "كرتون عازل للحرارة بطباعة آمنة غذائياً." },
  { name: "معدات الحماية", tag: "صناعي", desc: "حشوات وفواصل ووسائد امتصاص صدمات." },
  { name: "أكواب وعبوات ورقية", tag: "تجزئة", desc: "حلول ورقية صديقة للبيئة بطباعة فاخرة." },
  { name: "صناديق العرض", tag: "Retail", desc: "تصاميم جذابة لرفوف المتاجر والمعارض." },
];

function ProductsPage() {
  return (
    <main className="min-h-screen">
      <div className="mesh-bg" /><div className="grain" />
      <Navbar />
      <section className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs tracking-[0.3em] text-[color:var(--bronze)] mb-3 font-mono">كتالوجنا</div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            حلول تغليف <span className="gradient-text">دقيقة</span>
          </h1>
          <p className="mt-6 text-[color:var(--navy)]/70 max-w-2xl text-lg">
            تشكيلة متكاملة من منتجات الكرتون والتغليف، مصممة هندسياً وفق معايير ISO العالمية.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {products.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass glass-glow rounded-2xl p-8 group hover:-translate-y-1 transition-transform"
              >
                <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-mono px-3 py-1 rounded-full bg-[color:var(--navy)]/8 text-[color:var(--bronze)] mb-5">{p.tag}</span>
                <h3 className="text-2xl font-black">{p.name}</h3>
                <p className="mt-3 text-[color:var(--navy)]/70 leading-relaxed">{p.desc}</p>
                <div className="mt-6 text-[color:var(--bronze)] font-bold opacity-0 group-hover:opacity-100 transition">طلب عرض سعر ←</div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
