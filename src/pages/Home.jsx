import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import Sobre from "../components/Sobre";
import Servicos from "../components/Servicos";
import AreaPaciente from "../components/AreaPaciente";
import Publicacoes from "../components/Publicacoes";
import ContatoForm from "../components/ContatoForm";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dra. Leiza Hollas | Especialista em Cirurgia Cardiovascular</title>
        <meta
          name="description"
          content="Cirurgia Cardiovascular com atuação em valvopatias, cirurgia valvar e simulação cirúrgica. Atendimentos e publicações científicas."
        />
        <link rel="canonical" href="https://www.draleizahollas.com.br/" />

        {/* 🔽 Preload das imagens principais (Hero) */}
        <link
          rel="preload"
          as="image"
          href={`${import.meta.env.BASE_URL}assets/webp/dra-leiza.webp`}
          type="image/webp"
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Dra. Leiza Hollas",
            "description": "Cirurgia Cardiovascular, com atuação em cirurgia valvar, simulação cirúrgica e pesquisa científica.",
            "url": "https://www.draleizahollas.com.br",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Paraná, Brasil",
              "addressCountry": "BR"
            },
            "medicalSpecialty": "Cardiovascular Surgery"
          }
          `}
        </script>
      </Helmet>

      {/* Conteúdo da Home */}
      <HeroSection />
      <Sobre />
      <Servicos />
      <AreaPaciente />
      <Publicacoes />
      <ContatoForm />
    </>
  );
}
