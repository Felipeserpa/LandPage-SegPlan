import styled from 'styled-components';

const Container = styled.div`
  /* HEADER FIXO */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2.5rem 0;
    display: flex;
    justify-content: center;
    background: #f8f9fa;
    z-index: 100;
    transition: 0.3s ease-in-out;

    &.active {
      padding: 1rem 0;
      background: rgba(248, 249, 250, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  }

  nav {
    max-width: 1280px;
    width: 100%;
    height: 60px; /* Altura fixa para alinhar verticalmente */
    display: flex;
    align-items: center;
    justify-content: space-between; /* WhatsApp na esquerda, Menu/Hamburger na direita */
    padding: 0 2rem;
    position: relative; /* FUNDAMENTAL para a logo centralizar por aqui */

    @media (max-width: 930px) {
      padding: 0 1.5rem;
    }
  }

  /* LOGO NO CENTRO EXATO */
  #logo {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 1rem;
    margin: 10px;
    transform: translate(
      -50%,
      -50%
    ); /* Move 50% para trás para centralizar o eixo */
    z-index: 110;
    pointer-events: auto;
  }

  #logo img {
    width: 220px;
    height: auto;
    display: block;
    transition: 0.3s;

    @media (max-width: 930px) {
      width: 150px;
    }

    @media (max-width: 450px) {
      width: 120px;
    }
  }

  /* BOTÃO WHATSAPP (CANTO ESQUERDO) */
  .cta-container {
    z-index: 120;
    display: flex;
    align-items: center;

    button {
      background-color: #017410;
      color: white;
      border: none;
      padding: 10px 18px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 5px;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      white-space: nowrap;
      transition: 0.3s;

      &:hover {
        background-color: #015c0d;
      }

      @media (max-width: 700px) {
        padding: 8px 12px;
        font-size: 0; /* Esconde o texto no mobile para não bater na logo */
        gap: 0;

        svg {
          margin: 0;
          font-size: 24px !important;
        }
      }
    }
  }

  /* MENU E HAMBURGER (CANTO DIREITO) */
  .nav-menu {
    display: flex;
    align-items: center;
    z-index: 150;

    @media (max-width: 930px) {
      position: fixed;
      right: -100%;
      top: 0;
      height: 100vh;
      width: 70%;
      background: #f8f9fa;
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      transition: 0.4s ease;
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    }

    &.active {
      right: 0;
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;
    z-index: 200;

    @media (max-width: 930px) {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
  }

  .bar {
    width: 30px;
    height: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.secondaryColor || '#333'};
    transition: 0.3s;
  }

  /* ANIMAÇÃO DO HAMBURGER */
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }
`;

export default Container;
