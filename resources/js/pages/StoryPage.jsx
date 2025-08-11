import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../css/app.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const translations = {
  en: {
    back: "← Back",
    home: "Home",
    github: "GitHub",
    linkedin: "LinkedIn",
    title: "My Story",
    intro1Title: "The Beginning",
    intro1Text:
      "I started learning programming in 2022. At first, it was just experimenting, but over time, I fell in love with the world of technology and web development.",
    intro2Title: "Journey",
    intro2Text:
      "Over the past 2 years, I have learned various programming languages such as PHP, Go, and JavaScript. I have also mastered the Laravel framework for building web applications.",
    intro3Title: "Education",
    intro3Text:
      "In 2025, I completed my Bachelor's degree at INSTIKI, majoring in Information Data Management.",
    intro4Title: "Vision & Mission",
    intro4Text:
      "I aspire to continuously develop my skills in technology and create products that benefit many people.",
    footerQuote:
      "You can’t use up creativity, the more you use, the more you have in your significant mind.",
  },
  in: {
    back: "← Kembali",
    home: "Beranda",
    github: "GitHub",
    linkedin: "LinkedIn",
    title: "Cerita Saya",
    intro1Title: "Awal Mula",
    intro1Text:
      "Saya mulai belajar pemrograman pada tahun 2022. Awalnya hanya mencoba-coba, namun lama-kelamaan saya jatuh cinta pada dunia teknologi dan pengembangan web.",
    intro2Title: "Perjalanan",
    intro2Text:
      "Selama 2 tahun terakhir, saya mempelajari berbagai bahasa pemrograman seperti PHP, Go, dan JavaScript. Saya juga menguasai framework Laravel untuk membangun aplikasi web.",
    intro3Title: "Pendidikan",
    intro3Text:
      "Pada tahun 2025, saya menyelesaikan pendidikan Sarjana di INSTIKI dengan jurusan Manajemen Data Informasi.",
    intro4Title: "Visi & Misi",
    intro4Text:
      "Saya bercita-cita untuk terus mengembangkan skill di dunia teknologi dan menciptakan produk yang bermanfaat bagi banyak orang.",
    footerQuote:
      "Kreativitas tidak akan habis dipakai, semakin sering digunakan, semakin banyak yang kamu miliki di pikiranmu.",
  },
};

export default function StoryPage() {
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
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="btn btn-sm btn-warning fw-bold">
            {t.back}
          </Link>
          <div className="d-flex gap-4">
          <button className="btn btn-sm btn-warning fw-bold" onClick={toggleLang}>
            {lang.toUpperCase()}
          </button>
            <Link
              to="/"
              className="text-white fw-semibold border-bottom border-warning pb-1 text-decoration-none"
            >
              {t.home}
            </Link>
            <a
              href="https://github.com/thejunni"
              className="text-secondary text-decoration-none"
            >
              {t.github}
            </a>
            <a
              href="https://www.linkedin.com/in/dejuniartaa/"
              className="text-secondary text-decoration-none"
            >
              {t.linkedin}
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container py-5">
        <h1 className="fw-bold mb-4">{t.title}</h1>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-dark rounded shadow-sm h-100">
              <h4 className="fw-bold text-warning">{t.intro1Title}</h4>
              <p className="text-secondary mb-0 text-justify">{t.intro1Text}</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 bg-dark rounded shadow-sm h-100">
              <h4 className="fw-bold text-warning">{t.intro2Title}</h4>
              <p className="text-secondary mb-0 text-justify">{t.intro2Text}</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 bg-dark rounded shadow-sm h-100">
              <h4 className="fw-bold text-warning">{t.intro3Title}</h4>
              <p className="text-secondary mb-0 text-justify">{t.intro3Text}</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 bg-dark rounded shadow-sm h-100">
              <h4 className="fw-bold text-warning">{t.intro4Title}</h4>
              <p className="text-secondary mb-0 text-justify">{t.intro4Text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-top border-secondary py-5">
        <div className="container">
          <p className="text-secondary mb-0">{t.footerQuote}</p>
        </div>
      </div>
    </div>
  );
}
