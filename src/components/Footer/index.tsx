import React from 'react';
import styled from 'styled-components';
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #0b1d10;
  color: #fff;
  /* Aumentei o padding para dar mais fôlego */
  padding: 4rem 0 2rem 0;
  font-size: 1rem;
  width: 100%;

  .container {
    /* Aumentei a largura máxima para ele espalhar mais */
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around faz as colunas espalharem melhor */
    justify-content: space-around;
    gap: 3rem;
    margin-bottom: 4rem;

    @media (max-width: 900px) {
      justify-content: space-between;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 2.5rem;
    }
  }

  .col {
    /* Garante que as colunas tenham uma largura mínima para não ficarem "espremidas" */
    flex: 1;
    min-width: 280px;
  }

  .col h4 {
    color: #25d366;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
  }

  .logo-text {
    font-size: 2rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 0.5rem;
    display: block;
  }

  .contact-info p {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1rem;
    color: #ccc;
    transition: 0.3s;

    svg {
      color: #25d366;
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .navigation ul {
    list-style: none;
    padding: 0;
  }

  .navigation li {
    margin-bottom: 0.8rem;
  }

  .navigation a {
    color: #ccc;
    text-decoration: none;
    font-size: 1rem;
    transition: 0.3s;

    &:hover {
      color: #25d366;
      padding-left: 5px; /* Efeito de deslocamento ao passar o mouse */
    }
  }

  .social-wrapper {
    display: flex;
    gap: 20px;
    margin-top: 15px;

    @media (max-width: 768px) {
      justify-content: center;
    }

    a {
      color: #fff;
      font-size: 1.8rem;
      transition: 0.3s;

      &:hover {
        color: #25d366;
        transform: translateY(-5px);
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    // padding-top: 2rem;
    text-align: center;
    font-size: 0.85rem;
    color: #888;
    display: flex;
    flex-direction: column;
    gap: 8px;

    a {
      color: #25d366;
      text-decoration: none;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="container">
        <div className="footer-content">
          {/* Coluna 1: Branding */}
          <div className="col">
            <span className="logo-text">SEGPLAN</span>
            <p
              style={{
                marginBottom: '20px',
                color: '#aaa',
                fontStyle: 'italic',
              }}
            >
              Excelência em Engenharia: Laudos, Projetos e Fiscalizações
              Técnicas.
            </p>
            <div className="contact-info">
              <p>
                <FaEnvelope /> segplanengenharia@gmail.com
              </p>
              <p>
                <FaWhatsapp /> (81) 9 98928.2737
              </p>
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div className="col navigation">
            <h4>Navegação</h4>
            <ul>
              <li>
                <a href="#services">Nossos Serviços</a>
              </li>
              <li>
                <a href="#portfolio">Portfólio de Obras</a>
              </li>
              <li>
                <a href="#contact">Solicitar Orçamento</a>
              </li>
              <li>
                <a href="#about">Sobre a Empresa</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes e Localização */}
          <div className="col">
            <h4>Conecte-se</h4>
            <div className="social-wrapper">
              <a
                href="https://www.instagram.com/segplan_pec/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              {/* Adicionado espaço para mais ícones caso queira futuramente */}
            </div>
            <div className="contact-info" style={{ marginTop: '25px' }}>
              <p>
                <FaMapMarkerAlt /> Atendimento em Recife, PE e Região
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} <strong>SEGPLAN ENGENHARIA</strong>. Todos os
            direitos reservados.
          </p>
          <p>
            Tecnologia e Design por{' '}
            <a href="#" target="_blank">
              @SerpaSoluçõesTecnologicas
            </a>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
}
