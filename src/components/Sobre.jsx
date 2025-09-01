import React from "react";
import { useTranslation } from "react-i18next";

export default function Sobre() {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-sm rounded-2xl shadow-md p-6 md:p-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Texto */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            {t("sobre.titulo")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {t("sobre.texto")}
          </p>
        </div>

        {/* Imagem de apoio */}
        <div className="flex-1 flex justify-center">
          <picture>
            <source
              srcSet={`${import.meta.env.BASE_URL}assets/webp/sobre.webp`}
              type="image/webp"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/sobre.png`}
              alt="Imagem da Dra Leiza realizando uma cirurgia"
              width="500"
              height="500"
              loading="eager"
              decoding="async"
              className="w-full max-w-[300px] md:max-w-sm"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
