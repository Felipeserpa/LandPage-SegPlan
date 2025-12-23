import React from 'react';
import styled, { keyframes } from 'styled-components';

import logo01 from '../../assets/images/cliente/LOGO (1).png';
import logo02 from '../../assets/images/cliente/LOGO (2).png';
import logo03 from '../../assets/images/cliente/LOGO (3).png';
import logo04 from '../../assets/images/cliente/LOGO (4).png';
import logo05 from '../../assets/images/cliente/LOGO (5).png';
import logo06 from '../../assets/images/cliente/LOGO (6).png';
import logo07 from '../../assets/images/cliente/LOGO (7).png';
import logo08 from '../../assets/images/cliente/LOGO (8).png';
import logo09 from '../../assets/images/cliente/LOGO (9).png';
import logo10 from '../../assets/images/cliente/LOGO (10).png';
import logo12 from '../../assets/images/cliente/LOGO (12).png';
import logo13 from '../../assets/images/cliente/LOGO (13).png';
import logo14 from '../../assets/images/cliente/LOGO (14).png';
import logo15 from '../../assets/images/cliente/LOGO (15).png';
import logo16 from '../../assets/images/cliente/parvi.png';
import logo17 from '../../assets/images/cliente/tramontina.png';

const clientLogos = [
  logo01,
  logo02,
  logo03,
  logo04,
  logo05,
  logo06,
  logo07,
  logo08,
  logo09,
  logo10,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
];

export default function ClientLogosSection() {
  return (
    <Container id="clients">
      <div className="container">
        <h2 className="section-title">Nossos Clientes</h2>

        <p className="section-subtitle">
          Empresas e condomínios que garantiram segurança e conformidade com a
          SEGPLAN.
        </p>

        <LogoMarquee>
          <LogoTrack>
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <LogoItem key={index}>
                <img src={logo} alt={`Cliente ${index + 1}`} />
              </LogoItem>
            ))}
          </LogoTrack>
        </LogoMarquee>
      </div>
    </Container>
  );
}

/* =============================
   ⬇️  RESPONSIVIDADE REAL + FLUIDA
============================== */

const Container = styled.section`
  padding: 6vh 3vw;
  background: #fff;
  border-top: 1px solid #eee;

  .container {
    max-width: 1400px;
    margin: auto;
  }

  .section-title {
    text-align: center;
    font-size: clamp(1.4rem, 4vw, 2.4rem);
    font-weight: 800;
    color: #111;
    line-height: 1.3;
    margin-bottom: 12px;
  }

  .section-subtitle {
    text-align: center;
    font-size: clamp(0.95rem, 2.4vw, 1.25rem);
    max-width: 800px;
    margin: auto;
    margin-bottom: 45px;
    color: #555;
    line-height: 1.55;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 45px 15px;

    .section-subtitle {
      margin-bottom: 30px;
      line-height: 1.45;
    }
  }
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const LogoMarquee = styled.div`
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
`;

const LogoTrack = styled.div`
  display: flex;
  animation: ${scroll} 26s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoItem = styled.div`
  flex-shrink: 0;
  width: 230px;
  height: 110px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 180px;
    height: 80px;
  }
  @media (max-width: 480px) {
    width: 140px;
    height: 60px;
  }

  img {
    max-width: 100%;
    max-height: 60px;
    transition: 0.3s;
    filter: grayscale(0%);
  }

  img:hover {
    transform: scale(1.08);
  }
`;
