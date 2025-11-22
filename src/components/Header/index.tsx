/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useLayoutEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagramSquare,
} from 'react-icons/fa';
import Container from './styles';
import { FaWhatsapp } from 'react-icons/fa';
export default function Header() {
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active);
  };

  useLayoutEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [active]);

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Container>
      <header className={navbar ? 'header active' : 'header'}>
        <nav>
          <div id="logo">
            <a href="/">
              <img
                src="/SEGC.png" // Recomendo renomear para "segplan-arte.jpg" para evitar espaços
                alt="Logo da Segplan"
              />
            </a>
          </div>
          <div className={active ? 'nav-menu  active' : 'nav-menu '}>
            <ul
              onClick={() => {
                setMode(false);
              }}
            >
              <li>
                <a href="#inicio">Serviços</a>
              </li>
              <li>
                <a href="#cliente">Beneficios</a>
              </li>

              <li>
                <a href="#skills">Sobre</a>
              </li>
              <li>
                <a href="#contact">FAQ</a>
              </li>
            </ul>

            <div className="cta-container">
              <a href="https://wa.me/message/VOG6YD5POXPPG1" className="cta">
                <button
                  type="button"
                  style={{
                    backgroundColor: '#017410',
                    color: 'white',
                    border: 'none',
                    padding: '12px 20px',
                    fontSize: '18px',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                  }}
                >
                  Agende um horário conosco{' '}
                  <FaWhatsapp style={{ fontSize: '22px' }} />
                </button>
              </a>
            </div>
          </div>
          <div
            className={active ? 'hamburger active' : 'hamburger'}
            id="one"
            onClick={toggleMode}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </nav>
      </header>
    </Container>
  );
}
