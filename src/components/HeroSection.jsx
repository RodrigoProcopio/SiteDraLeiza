import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="bg-transparent py-20 px-4">
      <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-sm rounded-2xl shadow-md p-6 md:p-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Imagem à esquerda */}
        <div className="flex-1 flex justify-center md:justify-start">
          <picture>
            <source
              srcSet={`${import.meta.env.BASE_URL}assets/webp/dra-leiza.webp`}
              type="image/webp"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/dra-leiza.png`}
              alt={t("hero.nome")}
              width="1952"
              height="2930"
              loading="eager" decoding="async"
              className="max-h-[500px] w-auto"
            />
          </picture>
        </div>

        {/* Texto à direita */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            {t("hero.nome")}
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            {t("hero.especialidade")}
          </p>
          <p className="text-base md:text-lg text-blue-700 font-medium">
            {t("hero.crm")}
          </p>
        </div>
      </div>
    </section>
  );
}
