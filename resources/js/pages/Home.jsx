import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import profileImg from "../../images/profile.png";
import "../../css/app.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const translations = {
  en: {
    home: "Home",
    github: "GitHub",
    linkedin: "LinkedIn",
    introduction: "— Introduction",
    role: "Web Developer, based in Bali, Indonesia.",
    description:
      " I am a Website Developer with experience in several programming languages such as PHP, Go, and JavaScript. I have approximately 2 years of experience (2022 – 2024) in the programming world. I have also completed my Bachelor's degree at INSTIKI in 2025. In terms of skills, I have a deep understanding of the LARAVEL framework.",
    story: "My story →",
    contact: "— Contact",
    query: "Email: dejuniartaa@gmail.com",
    footerQuote:
      "You can’t use up creativity, the more you use, the more you have in your significant mind.",
  },
  in: {
    home: "Beranda",
    github: "GitHub",
    linkedin: "LinkedIn",
    introduction: "— Perkenalan",
    role: "Pengembang Web, berbasis di Bali, Indonesia.",
    description:
      "Saya adalah seorang Pengembang Website dengan pengalaman dalam beberapa bahasa pemrograman seperti PHP, Go, dan JavaScript. Saya memiliki pengalaman sekitar 2 tahun (2022 – 2024) di dunia pemrograman. Saat ini, Saya juga telah menyelesaikan pendidikan Sarjana di INSTIKI pada tahun 2025. Dalam hal keterampilan, saya memiliki pemahaman yang mendalam mengenai framework LARAVEL",
    story: "Cerita saya →",
    contact: "— Kontak",
    query: "Email: dejuniartaa@gmail.com",
    footerQuote:
      "Kreativitas tidak akan habis dipakai, semakin sering digunakan, semakin banyak yang kamu miliki di pikiranmu.",
  },
};

export default function Home() {
  const [lang, setLang] = useState("en");


  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === "en" ? "in" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = translations[lang];

  return (
    <div style={{ backgroundColor: "#1e1e2f", color: "white", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="py-4">
        <div className="container d-flex justify-content-end align-items-center">
          <div className="d-flex gap-4">
            <button className="btn btn-sm btn-warning fw-bold" onClick={toggleLang}>
              {lang.toUpperCase()}
            </button>
            <a href="/" className="text-white fw-semibold border-bottom border-warning pb-1 text-decoration-none">
              {t.home}
            </a>
            <a href="https://github.com/thejunni" className="text-secondary text-decoration-none">
              {t.github}
            </a>
            <a href="https://www.linkedin.com/in/dejuniartaa/" className="text-secondary text-decoration-none">
              {t.linkedin}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6 text-center text-md-start">
            <img src={profileImg} alt="Profile" style={{ maxWidth: "300px" }} />
            <h1 className="fw-bold display-4 lh-sm">I Gede Juniarta.</h1>
            <div className="mt-3 fs-4">
              <a href="https://www.instagram.com/igedejuniartaa/" className="text-secondary me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/thejunni" className="text-secondary me-3">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/dejuniartaa/" className="text-secondary">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-uppercase text-secondary small mb-2">{t.introduction}</p>
            <h2 className="h4 fw-semibold mb-4">{t.role}</h2>
            <p className="text-secondary mb-4 text-justify">{t.description}</p>
            <Link to="/story" className="fw-semibold text-warning text-decoration-none">
              {t.story}
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-top border-secondary py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <p className="text-uppercase text-secondary small mb-2">{t.contact}</p>
              <p className="h5">{t.query}</p>
            </div>
            <div className="col-md-6">
              <p className="text-secondary mb-0">{t.footerQuote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
