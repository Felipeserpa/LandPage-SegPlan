// src/components/ContactSection/ContactSection.jsx
import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Container from './styles';

export default function ContactSection() {
  return (
    <Container id="contact">
      <div className="container">
        <h2 className="section-title">Fale Conosco e Solicite Seu Orçamento</h2>

        <div className="content-wrapper">
          {/* Coluna de Texto e Contatos */}
          <div className="info-column">
            <h3 className="cta-headline">
              Garanta a Segurança e a Valorização do Seu Patrimônio.
            </h3>
            <p className="cta-text">
              Não adie a tranquilidade e a segurança que sua obra ou imóvel
              merecem. Nossa equipe técnica está pronta para oferecer um
              diagnóstico preciso e soluções eficientes.
            </p>

            <div className="contact-details">
              <a
                href="https://wa.me/5581989282737?text=Olá,%20tenho%20interesse%20no%20serviço!"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link whatsapp"
              >
                <FaWhatsapp /> Fale Pelo WhatsApp
              </a>
              <a
                href="mailto:contato@segplan.seg.br"
                className="contact-link email"
              >
                <FaEnvelope /> segplanengenharia@gmail.com
              </a>
            </div>

            <p className="commitment-text">
              Retornaremos seu contato em no máximo 2 horas úteis.
            </p>
          </div>

          {/* Coluna do Formulário */}
          <div className="form-column">
            <form
              className="contact-form"
              // Substitua o action pela sua URL de serviço de formulário (ex: Formspree)
              action="SUA_URL_DE_BACKEND_AQUI"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Seu Nome Completo"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu E-mail"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="WhatsApp (DDD + Número)"
                required
              />
              <textarea
                name="message"
                placeholder="Detalhes do Serviço (Inspeção, Laudo, Fiscalização...)"
                required
              ></textarea>

              <a
                href="https://wa.me/5581989282737?text=Olá,%20tenho%20interesse%20no%20serviço!"
                target="_blank"
                rel="noopener noreferrer"
                className="submit-button"
              >
                Solicitar Orçamento Gratuito
              </a>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
// O Styled-Components será definido na seção 2.
