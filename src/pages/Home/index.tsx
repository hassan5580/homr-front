import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "./Loader";
import Hero from "./Hero";
import Features from "./Features";
import Products from "./Products";
import Stats from "./Stats";
import Process from "./Process";
import Testimonials from "./Testimonials";
import SustainabilitySection from "./SustainabilitySection";
import CTABanner from "./CTABanner";
import FAQ from "./FAQ";
import Contact from "./Contact";

export default function Home() {
  return (
    <div dir="rtl" lang="ar" style={{ position: "relative" }}>
      <div className="mesh-bg" />
      <div className="grain" />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <Stats />
        <Process />
        <Testimonials />
        <SustainabilitySection />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}
