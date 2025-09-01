import React from "react";
import { useTranslation } from "react-i18next";

export default function Servicos() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 text-center" id="publicacoes">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-10">{t('servicos.titulo')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl shadow-md flex flex-col items-center space-y-4">
            <img
              src={`${import.meta.env.BASE_URL}assets/coracao.png`}
              alt="Ilustração de um coração"
              width="100"
              height="100"
              className="w-24 h-24 object-contain"
            />
            <p className="font-semibold text-blue-900">{t('servicos.cirurgia')}</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl shadow-md flex flex-col items-center space-y-4">
            <img
              src={`${import.meta.env.BASE_URL}assets/avaliacao.png`}
              alt="Ilustração de avaliação médica"
              width="100"
              height="100"
              className="w-24 h-24 object-contain"
            />
            <p className="font-semibold text-blue-900">{t('servicos.avaliacao')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
