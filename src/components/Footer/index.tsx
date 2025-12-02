// src/components/Footer/Footer.jsx - REVISADO
import React from 'react';
import styled from 'styled-components';
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Container = styled.footer`
  background-color: var(--color-primary-dark);
  color: var(--color-text-light);
  padding: 4rem 0;
  font-size: 0.9rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2.5rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .col {
    flex: 1;
    min-width: 250px;

    @media (max-width: 768px) {
      min-width: unset;
      width: 100%;
    }
  }

  h4 {
    color: var(--color-secondary);
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background-color: var(--color-secondary);
      margin-top: 0.5rem;
      ${'' /* Centraliza o underline em telas menores */}
      @media (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  .logo-name {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--color-white);
    margin-bottom: 0.5rem;
  }

  .tagline {
    font-style: italic;
    margin-bottom: 1.5rem;
    color: var(--color-text-light);
  }

  .contact-info p,
  .crea-info {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    color: var(--color-text-light);

    svg {
      margin-right: 10px;
      color: var(--color-secondary);
      font-size: 1.1rem;
    }
  }

  .navigation ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.8rem;

      a {
        color: var(--color-text-light);
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: var(--color-secondary);
        }
      }
    }
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      justify-content: center;
    }

    a {
      color: var(--color-text-light);
      font-size: 1.8rem;
      transition: color 0.3s ease;

      &:hover {
        color: var(--color-secondary);
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .copyright,
    .developed-by {
      color: var(--color-text-light);
    }

    a {
      color: var(--color-secondary);
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Ajuste aqui o link correto para o WhatsApp (apenas números com DDD, sem + ou traços)
  const WHATSAPP_NUMBER = '81987654321'; // Exemplo

  return (
    <Container>
      <div className="container">
        <div className="footer-content">
          {/* Coluna 1: Logo e Informações de Contato */}
          <div className="col logo-info">
            <h4 className="logo-name">SEGPLAN</h4>
            <p className="tagline">
              Engenharia Diagnóstica e Segurança Predial
            </p>

            <div className="contact-info">
              <p>
                <FaEnvelope /> contato@segplan.seg.br
              </p>
              <p>
                <FaWhatsapp /> (81) 9 XXXX-XXXX
              </p>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="col navigation">
            <h4>Acesso Rápido</h4>
            <ul>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#portfolio">Portfólio</a>
              </li>
              <li>
                <a href="#engineers">Quem Somos</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais e Localização */}
          <div className="col social">
            <h4>Siga-nos</h4>
            <div className="social-icons">
              <a
                href="URL_DO_INSTAGRAM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="contact-info">
              <FaMapMarkerAlt /> Recife, PE - Brasil
            </p>

            <p className="crea-info">
              CREA-PE / CREA-BA (Consulte os registros na seção de
              credibilidade).
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} SEGPLAN. Todos os direitos reservados.
          </p>
          <p className="developed-by">
            Desenvolvido por{' '}
            <a href="LINK_DA_SERPA" target="_blank" rel="noopener noreferrer">
              @SerpaSoluçõesTecnologicas
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
