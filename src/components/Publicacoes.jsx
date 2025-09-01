import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const imagens = [
  {
    nome: "livro1",
    link: "https://atenaeditora.com.br/catalogo/ebook/manual-basico-de-cirurgia-toracica-e-cardiovascular-da-lactcv"
  },
  {
    nome: "thevalve1",
    link: "https://thevalveclub.com.br/intervencao-na-cardiopatia-estrutural/"
  },
  {
    nome: "thevalve2",
    link: "https://thevalveclub.com.br/valva-mitral/"
  },
  {
    nome: "thevalve3",
    link: "https://thevalveclub.com.br/when-the-goats-go-wrong/"
  },
  {
    nome: "thevalve4",
    link: "https://thevalveclub.com.br/david-e-yacoub/"
  },
  {
    nome: "thevalve5",
    link: "https://thevalveclub.com.br/the-forgotten-valve/"
  }
];

export default function Publicacoes() {
  const { t } = useTranslation();
  const artigos = t("publicacoes.artigos", { returnObjects: true });

  return (
    <section id="publicacoes" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Slider de imagens com WebP */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="mb-10 rounded-xl overflow-hidden"
        >
          {imagens.map((img, index) => (
            <SwiperSlide key={index}>
              <a href={img.link} target="_blank" rel="noopener noreferrer">
                <picture>
                  <source
                    srcSet={`${import.meta.env.BASE_URL}assets/webp/${img.nome}.webp`}
                    type="image/webp"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}assets/${img.nome}.png`}
                    alt={`Publicação ${index + 1}`}
                    width="400"
                    height="600"
                    className="w-full h-48 object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </picture>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Título da seção */}
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-900">
          {t("publicacoes.titulo")}
        </h2>

        {/* Cards de artigos */}
        <div className="grid gap-6">
          {artigos.map((artigo, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-sm text-gray-800 p-6 rounded-xl shadow-md"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">{artigo.titulo}</h3>
                <p className="text-sm text-blue-800 mb-3">{artigo.data}</p>
              </div>
              <p className="text-base mb-4 text-justify">{artigo.resumo}</p>
              <div className="text-right mt-4">
                <a
                  href={artigo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  {t("publicacoes.botao")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
