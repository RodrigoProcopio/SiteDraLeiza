import React from "react";
import { useTranslation } from "react-i18next";
import { FileText, HelpCircle, ShieldCheck, Hand, AlertTriangle } from "lucide-react";

export default function AreaPaciente() {
  const { t } = useTranslation();

  return (
    <section id="area-paciente" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          {t('paciente.titulo')}
        </h2>

        {/* Instruções Pré-Operatórias */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            {t('paciente.preop.titulo')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card icon={<FileText className="w-10 h-10 text-blue-800" />} title={t('paciente.preop.card1.titulo')} text={t('paciente.preop.card1.texto')} />
            <Card icon={<FileText className="w-10 h-10 text-blue-800" />} title={t('paciente.preop.card2.titulo')} text={t('paciente.preop.card2.texto')} />
            <Card icon={<FileText className="w-10 h-10 text-blue-800" />} title={t('paciente.preop.card3.titulo')} text={t('paciente.preop.card3.texto')} />
            <Card icon={<FileText className="w-10 h-10 text-blue-800" />} title={t('paciente.preop.card4.titulo')} text={t('paciente.preop.card4.texto')} />
          </div>
        </div>

        {/* Segurança do Paciente */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            {t('paciente.seguranca.titulo')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card icon={<ShieldCheck className="w-10 h-10 text-blue-800" />} title={t('paciente.seguranca.card1.titulo')} text={t('paciente.seguranca.card1.texto')} />
            <Card icon={<ShieldCheck className="w-10 h-10 text-blue-800" />} title={t('paciente.seguranca.card2.titulo')} text={t('paciente.seguranca.card2.texto')} />
          </div>
        </div>

        {/* Prevenção de Quedas */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            {t('paciente.quedas.titulo')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card icon={<AlertTriangle className="w-10 h-10 text-blue-800" />} title={t('paciente.quedas.card1.titulo')} text={t('paciente.quedas.card1.texto')} />
            <Card icon={<AlertTriangle className="w-10 h-10 text-blue-800" />} title={t('paciente.quedas.card2.titulo')} text={t('paciente.quedas.card2.texto')} />
          </div>
        </div>

        {/* Higienização das Mãos */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            {t('paciente.higiene.titulo')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card icon={<Hand className="w-10 h-10 text-blue-800" />} title={t('paciente.higiene.card1.titulo')} text={t('paciente.higiene.card1.texto')} />
            <Card icon={<Hand className="w-10 h-10 text-blue-800" />} title={t('paciente.higiene.card2.titulo')} text={t('paciente.higiene.card2.texto')} />
          </div>
        </div>

        {/* Internação e Medicações */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            {t('paciente.internacaoMed.titulo')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card icon={<FileText className="w-10 h-10 text-blue-800" />} title={t('paciente.internacaoMed.card1.titulo')} text={t('paciente.internacaoMed.card1.texto')} />
            <Card icon={<FileText className="w-10 h-10 text-blue-800" />} title={t('paciente.internacaoMed.card2.titulo')} text={t('paciente.internacaoMed.card2.texto')} />
            <Card icon={<FileText className="w-10 h-10 text-blue-800" />} title={t('paciente.internacaoMed.card3.titulo')} text={t('paciente.internacaoMed.card3.texto')} />
            <Card icon={<FileText className="w-10 h-10 text-blue-800" />} title={t('paciente.internacaoMed.card4.titulo')} text={t('paciente.internacaoMed.card4.texto')} />
          </div>
        </div>

        {/* Dúvidas Frequentes */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            {t('paciente.duvidas.titulo')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card icon={<HelpCircle className="w-10 h-10 text-blue-800" />} title={t('paciente.duvidas.card1.titulo')} text={t('paciente.duvidas.card1.texto')} />
            <Card icon={<HelpCircle className="w-10 h-10 text-blue-800" />} title={t('paciente.duvidas.card2.titulo')} text={t('paciente.duvidas.card2.texto')} />
            <Card icon={<HelpCircle className="w-10 h-10 text-blue-800" />} title={t('paciente.duvidas.card3.titulo')} text={t('paciente.duvidas.card3.texto')} />
            <Card icon={<HelpCircle className="w-10 h-10 text-blue-800" />} title={t('paciente.duvidas.card4.titulo')} text={t('paciente.duvidas.card4.texto')} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Card reutilizável
function Card({ icon, title, text }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow flex gap-4">
      {icon}
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
}


