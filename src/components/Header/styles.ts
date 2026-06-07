import styled from 'styled-components';

const Container = styled.div`
  /* CONTAINER DO HEADER (Fica invisível, serve para posicionar a barra) */
  .header {
    position: fixed;
    //top: 24px; /* Afasta o menu do topo exatamente igual à foto */
    left: 0;
    width: 100%;
    z-index: 999;
    padding: 0 2rem; /* Margem nas laterais da tela */
    transition: all 0.3s ease;
    background: transparent; /* Remove o fundo do container pai */
    border-bottom: none; /* Remove a linha cinza antiga */
  }

  /* Quando o usuário rolar a página, o menu ganha um leve desfoque */
  .header.active nav {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
  }

  /* A CÁPSULA BRANCA (O menu em si) */
  nav {
    max-width: 1200px; /* Largura ideal para alinhar com o design da foto */
    height: 64px; /* Altura um pouco mais elegante para o formato pílula */
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    background: #ffffff; /* Fundo totalmente branco */
    border-radius: 100px; /* Transforma o menu em uma pílula perfeita */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05); /* Sombra suave da foto */
    transition: all 0.3s ease;
  }

  /* LOGO */
  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    z-index: 1000;
  }

  .logo img {
    width: 130px;
    height: auto;
    display: block;
  }

  /* MENU CENTRAL */
  .nav-menu {
    display: flex;
    align-items: center;
    gap: 2.5rem; /* Espaçamento levemente maior entre os links */
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-menu a {
    text-decoration: none;
    color: #4a5568; /* Tom de cinza mais moderno */
    font-size: 14px;
    font-weight: 500;
    transition: 0.3s;
    position: relative;
  }

  .nav-menu a:hover,
  .nav-menu a.active {
    color: #003f7d;
  }

  /* Linha animada embaixo dos links */
  .nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #003f7d;
    transition: 0.3s;
  }

  .nav-menu a:hover::after {
    width: 100%;
  }

  /* BOTÕES E AÇÕES DA DIREITA */
  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* BOTÃO AZUL ESCURO (Solicitar Orçamento) */
  .btn-orcamento {
    background: #003f7d;
    color: white;
    border: none;
    padding: 10px 22px;
    border-radius: 50px; /* Botão oval igual ao da foto */
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .btn-orcamento:hover {
    background: #002e5d;
    transform: scale(1.03);
  }

  /* BOTÃO WHATSAPP */
  .btn-whatsapp {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffffff;
    color: #003f7d;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: 0.3s;
    text-decoration: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  }

  .btn-whatsapp:hover {
    transform: scale(1.08);
    background: #f7fafc;
  }

  /* HAMBURGER (Mobile) */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 1100;
  }

  .bar {
    width: 26px;
    height: 3px;
    border-radius: 10px;
    background: #003f7d;
    transition: 0.3s;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  /* OVERLAY (Mobile) */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    z-index: 998;
  }

  .overlay.active {
    opacity: 1;
    visibility: visible;
  }

  /* COMPORTAMENTO RESPONSIVO */
  @media (max-width: 930px) {
    .header {
      top: 0;
      padding: 0;
    }

    nav {
      max-width: 100%;
      height: 70px;
      border-radius: 0; /* Remove as bordas redondas no mobile para preencher a tela */
      padding: 0 1.5rem;
    }

    .hamburger {
      display: flex;
    }

    .nav-menu {
      position: fixed;
      top: 70px;
      right: -100%;
      width: 280px;
      max-width: 80%;
      height: calc(100vh - 70px);
      background: white;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 2rem;
      gap: 1.8rem;
      box-shadow: -10px 0 25px rgba(0, 0, 0, 0.05);
      transition: 0.4s ease;
      z-index: 999;
    }

    .nav-menu.active {
      right: 0;
    }

    .nav-menu a {
      font-size: 15px;
      width: 100%;
      padding-bottom: 10px;
      border-bottom: 1px solid #efefef;
    }

    .nav-menu a::after {
      display: none; /* Desativa a linha animada no mobile */
    }
  }

  @media (max-width: 500px) {
    .header,
    nav {
      height: 65px;
    }

    .nav-menu {
      top: 65px;
      height: calc(100vh - 65px);
    }

    .logo img {
      width: 110px;
    }
  }
`;

export default Container;
