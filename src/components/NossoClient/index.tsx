import React from 'react';
import styled, { keyframes } from 'styled-components';

// Dados de Exemplo: Substitua os caminhos pelas URLs/caminhos dos logos dos seus clientes.
// Certifique-se de ter os arquivos de logo dentro da sua pasta 'public' ou 'assets'.
const clientLogos = [
  '/logos/logo-client-01.png', // Exemplo
  '/logos/logo-client-02.png', // Exemplo
  '/logos/logo-client-03.png', // Exemplo
  '/logos/logo-client-04.png', // Exemplo
  '/logos/logo-client-05.png', // Exemplo
  '/logos/logo-client-06.png', // Exemplo
  '/logos/logo-client-07.png', // Exemplo
  '/logos/logo-client-08.png', // Exemplo
  '/logos/logo-client-09.png', // Exemplo
];

export default function ClientLogosSection() {
  return (
    <Container id="clients">
      <div className="container">
        <h2 className="section-title">
          Nossos Clientes Confiam em Nossa Precisão
        </h2>
        <p className="section-subtitle">
          Empresas e condomínios que garantiram a segurança e a conformidade de
          seus ativos com a SEGPLAN.
        </p>

        {/* Carrossel Infinito de Logos */}
        <LogoMarquee>
          <LogoTrack>
            {/* Repete os logos para criar o loop contínuo e a sensação de movimento */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <LogoItem key={index}>
                <img src={logo} alt={`Logo do Cliente ${index + 1}`} />
              </LogoItem>
            ))}
          </LogoTrack>
        </LogoMarquee>
      </div>
    </Container>
  );
}

// -------------------------------------------------------------
// STYLED-COMPONENTS (CSS)
// -------------------------------------------------------------

const Container = styled.div`
  padding: 60px 20px;
  background-color: #ffffff; /* Fundo branco ou claro */
  border-top: 1px solid #eee;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    color: #333;
    margin-bottom: 5px;
  }

  .section-subtitle {
    font-size: 1rem;
    text-align: center;
    color: #666;
    margin-bottom: 40px;
  }
`;

// Keyframes para a animação do carrossel
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* Move a metade do conjunto de logos */
`;

const LogoMarquee = styled.div`
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
`;

const LogoTrack = styled.div`
  display: flex;
  width: fit-content; /* Garante que todos os logos caibam lado a lado */
  animation: ${scroll} 30s linear infinite; /* 30 segundos de duração */

  /* Pausa a animação ao passar o mouse */
  &:hover {
    animation-play-state: paused;
  }
`;

const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* Largura fixa para cada item no carrossel. */
  width: 250px;
  height: 80px;
  padding: 0 30px;
  flex-shrink: 0;

  /* Ajuste para mobile */
  @media (max-width: 640px) {
    width: 150px;
  }

  img {
    max-width: 100%;
    max-height: 50px;
    opacity: 0.6; /* Deixa os logos mais discretos */
    filter: grayscale(100%); /* Colore os logos em tons de cinza */
    transition: opacity 0.3s, filter 0.3s;

    &:hover {
      opacity: 1;
      filter: grayscale(0%); /* Mostra cor ao passar o mouse */
    }
  }
`;
