/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useLayoutEffect, useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Container from './styles';
import chat from '../../assets/images/segplan2.png';

export default function Header() {
  const [active, setMode] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleMode = () => setMode(!active);

  // Fecha o menu ao redimensionar a tela ou clicar em um link
  const closeMenu = () => setMode(false);

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
      {/* Overlay de fundo escuro para o mobile */}
      <div
        className={active ? 'overlay active' : 'overlay'}
        onClick={closeMenu}
      ></div>

      <header className={navbar ? 'header active' : 'header'}>
        <nav>
          {/* 1. LOGO ESQUERDA */}
          <a href="/" className="logo">
            <img src={chat} alt="SEGPLAN" />
          </a>

          {/* 2. MENU CENTRAL (Apenas os links de navegação textuais) */}
          <ul className={active ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <a href="#inicio" className="active" onClick={closeMenu}>
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={closeMenu}>
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#servicos" onClick={closeMenu}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={closeMenu}>
                Portfólio
              </a>
            </li>
            <li>
              <a href="#contato" onClick={closeMenu}>
                Contato
              </a>
            </li>
          </ul>

          {/* 3. AÇÕES DIREITA (Onde os botões devem morar para alinhar igual à foto) */}
          <div className="actions">
            {/* Botão Retangular Azul "Solicitar Orçamento" */}
            <a
              href="https://wa.me/5581999999999"
              target="_blank"
              rel="noreferrer"
              className="btn-orcamento"
            >
              Solicitar Orçamento
            </a>

            {/* Menu Hamburguer do Mobile */}
            <div
              className={active ? 'hamburger active' : 'hamburger'}
              onClick={toggleMode}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
}
