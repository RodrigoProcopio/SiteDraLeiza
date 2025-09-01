import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="bg-blue-100/80 backdrop-blur-sm shadow-md px-2 py-1 fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-20 relative">
        {/* Logo + ECG */}
        <div className="flex items-center space-x-6 z-10">
          <a href="#" aria-label="Início">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo-horizontal.png`}
              alt="Logo da Dra. Leiza Hollas – Cirurgiã Cardiovascular"
              width="1080"
              height="416"
              className="h-16 w-auto object-contain"
              loading="eager" // opcional: manter eager para logo visível logo no carregamento
            />
          </a>

          {/* ECG (esconde em mobile) */}
          <svg
            viewBox="0 0 600 80"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 sm:h-10 w-[120px] sm:w-[250px] md:w-full animate-ecg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40 L20 40 L25 10 L30 70 L35 40 L60 40 L65 20 L70 60 L75 40 L100 40 L105 10 L110 70 L115 40 L140 40 M0 40 L20 40 L25 10 L30 70 L35 40 L60 40 L65 20 L70 60 L75 40 L100 40 L105 10 L110 70 L115 40 L140 40"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="500"
              strokeDashoffset="2000"
            />
          </svg>
        </div>

        {/* Menu desktop */}
        <nav
          className="hidden md:flex space-x-14 items-center absolute left-1/2 transform -translate-x-1/2 z-10"
          role="navigation"
          aria-label="Menu principal"
        >
          <a href="#hero">{t("nav.home")}</a>
          <a href="#sobre">{t("nav.sobre")}</a>
          <a href="#publicacoes">{t("nav.publicacoes")}</a>
          <a href="#area-paciente">{t("nav.areaPaciente")}</a>
          <a href="#contato">{t("nav.contato")}</a>
        </nav>

        {/* Seletor de idioma (desktop) */}
        <div className="hidden md:flex items-center ml-8 z-10">
          <label htmlFor="lang-select" className="sr-only">Idioma</label>
          <select
            id="lang-select"
            aria-label="Selecionar idioma"
            onChange={changeLanguage}
            defaultValue={i18n.language}
            className="border rounded px-2 py-1 bg-blue-100 text-blue-900 font-medium"
          >
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu de navegação"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile acessível */}
      {isOpen && (
        <nav
          id="mobile-menu"
          role="navigation"
          aria-label="Menu mobile"
          className="md:hidden bg-white shadow-md px-6 py-4 mt-2 rounded-b-xl space-y-2 z-10 relative"
        >
          <a href="#hero" onClick={() => setIsOpen(false)}>{t("nav.home")}</a><br />
          <a href="#sobre" onClick={() => setIsOpen(false)}>{t("nav.sobre")}</a><br />
          <a href="#publicacoes" onClick={() => setIsOpen(false)}>{t("nav.publicacoes")}</a><br />
          <a href="#area-paciente" onClick={() => setIsOpen(false)}>{t("nav.areaPaciente")}</a><br />
          <a href="#contato" onClick={() => setIsOpen(false)}>{t("nav.contato")}</a><br />
          <label htmlFor="lang-select-mobile" className="sr-only">Idioma</label>
          <select
            id="lang-select-mobile"
            aria-label="Selecionar idioma"
            onChange={changeLanguage}
            defaultValue={i18n.language}
            className="border p-1 rounded mt-2"
          >
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </nav>
      )}
    </header>
  );
}
