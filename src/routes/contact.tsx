import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar, Footer } from "./index";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="min-h-screen">
      <div className="mesh-bg" /><div className="grain" />
      <Navbar />
      <section className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-xs tracking-[0.3em] text-[color:var(--bronze)] mb-3 font-mono">اتصل بنا</div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            دعنا نبني <span className="gradient-text">شيئاً عظيماً</span>.
          </h1>
          <p className="mt-6 text-lg text-[color:var(--navy)]/70 max-w-2xl">
            أخبرنا عن مشروعك، وسيتواصل معك فريقنا الهندسي خلال ٢٤ ساعة بعرض سعر مخصص.
          </p>

          <div className="grid lg:grid-cols-5 gap-8 mt-14">
            <motion.form
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass glass-glow rounded-3xl p-8 md:p-10 space-y-5 lg:col-span-3"
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
                <textarea rows={5} className="w-full bg-white/60 border border-[color:var(--navy)]/12 rounded-xl px-4 py-3 outline-none focus:border-[color:var(--bronze)] transition resize-none" />
              </div>
              <button type="submit" className="magnetic-btn">{sent ? "✓ تم الإرسال" : "إرسال الطلب ←"}</button>
            </motion.form>

            <div className="lg:col-span-2 space-y-5">
              {[
                { t: "اتصل بنا", d: "+966 11 000 0000" },
                { t: "راسلنا", d: "sales@homepack.sa" },
                { t: "زرنا", d: "المدينة الصناعية الثانية، الرياض" },
                { t: "ساعات العمل", d: "الأحد – الخميس · ٨ صباحاً – ٥ مساءً" },
              ].map((c) => (
                <div key={c.t} className="glass rounded-2xl p-6">
                  <div className="text-sm text-[color:var(--navy)]/60">{c.t}</div>
                  <div className="font-bold mt-1 text-lg">{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs text-[color:var(--navy)]/65 mb-2 tracking-wider">{label}</label>
      <input id={name} name={name} type={type} className="w-full bg-white/60 border border-[color:var(--navy)]/12 rounded-xl px-4 py-3 outline-none focus:border-[color:var(--bronze)] transition" />
    </div>
  );
}
