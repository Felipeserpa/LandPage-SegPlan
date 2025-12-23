/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useLayoutEffect, useState, useEffect } from 'react';
import { FaWhatsapp, FaReact, FaPhoneAlt } from 'react-icons/fa';
import Container from './styles';
import chat from '../../assets/images/segplan2.png';

export default function Header() {
  const [active, setMode] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleMode = () => setMode(!active);

  // Fecha o menu ao redimensionar a tela
  useLayoutEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto';
  }, [active]);

  useEffect(() => {
    const changeBackground = () => {
      setNavbar(window.scrollY > 10);
    };
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <Container>
      <header className={navbar ? 'header active' : 'header'}>
        <nav>
          {/* BOTÃO WHATSAPP - CANTO ESQUERDO */}
          <div className="cta-container">
            <a
              href="https://wa.me/5581989282737?text=Olá,%20tenho%20interesse%20no%20serviço!"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="btn-whatsapp">
                <span>Fale pelo Whatsapp</span>
                <FaWhatsapp />
              </button>
            </a>
          </div>

          {/* LOGO - CENTRO EXATO */}
          <div id="logo">
            <a href="/">
              <img src={chat} alt="Logo da Segplan" />
            </a>
          </div>

          {/* MENU / HAMBURGER - CANTO DIREITO */}
          <div className="menu-section">
            <div className="cta-container">
              <a
                href="https://wa.me/5581989282737?text=Olá,%20tenho%20interesse%20no%20serviço!"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="btn-whatsapp">
                  <FaPhoneAlt />
                  <span>Ligue agora (81) 98928-2737</span>
                </button>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
}
