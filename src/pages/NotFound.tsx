import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div dir="rtl" lang="ar" style={{ position: "relative" }}>
      <div className="mesh-bg" />
      <div className="grain" />
      <Navbar />
      <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "0 1.5rem" }}>
        <div style={{ maxWidth: "28rem", textAlign: "center" }}>
          <h1 className="gradient-text" style={{ fontSize: "4.5rem", fontWeight: 700 }}>404</h1>
          <h2 style={{ marginTop: "1rem", fontSize: "1.25rem", fontWeight: 600 }}>الصفحة غير موجودة</h2>
          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/" className="magnetic-btn" style={{ display: "inline-flex" }}>
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
