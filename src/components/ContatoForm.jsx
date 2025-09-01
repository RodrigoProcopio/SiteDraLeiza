import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export default function ContatoForm() {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_zy1sbxp',
        'template_fgfvkyr',
        form.current,
        'yfd2dXCxN8p1I_B5o'
      )
      .then(
        () => {
          setStatus('sucesso');
          form.current.reset();
        },
        () => {
          setStatus('erro');
        }
      );
  };

  return (
    <section className="py-16 px-4" id="contato">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm p-10 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('contato.titulo')}</h2>
        <p className="text-gray-700 mb-8 text-justify">
          {t('contato.descricao')}
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4 mb-10">
          <input
            name="name"
            type="text"
            placeholder={t('contato.nome')}
            required
            className="w-full p-3 border rounded"
          />
          <input
            name="email"
            type="email"
            placeholder={t('contato.email')}
            required
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            placeholder={t('contato.mensagem')}
            required
            className="w-full p-3 border rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            {t('contato.enviar')}
          </button>
        </form>

        {status === 'sucesso' && (
          <p className="text-green-600 font-medium">{t('contato.sucesso')}</p>
        )}
        {status === 'erro' && (
          <p className="text-red-600 font-medium">{t('contato.erro')}</p>
        )}

        <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line mt-6">
          <p className="font-semibold mb-1">{t('contato.agendamento')}</p>
          <p>📞 {t('contato.telefone')}</p>
          <p>🏥 {t('contato.hospital')}</p>
          <p>📍 {t('contato.endereco')}</p>
        </div>
      </div>
    </section>
  );
}


