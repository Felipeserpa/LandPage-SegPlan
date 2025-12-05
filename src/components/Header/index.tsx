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
import chat from '../../assets/images/segplan2.png';

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
              <img src={chat} alt="Logo da Segplan" />
            </a>
          </div>
          <div className={active ? 'nav-menu  active' : 'nav-menu '}>
            <ul
              onClick={() => {
                setMode(false);
              }}
            >
              <li>
                <a href="#inicio">Home</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>

              <li>
                <a href="#skills">Galeria</a>
              </li>
              <li>
                <a href="#contact">Contato </a>
              </li>
            </ul>

            <div className="cta-container">
              <a
                href="https://wa.me/5581989282737?text=Olá,%20tenho%20interesse%20no%20serviço!"
                target="_blank"
                rel="noreferrer"
              >
                <div className="cta">
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
                </div>
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
