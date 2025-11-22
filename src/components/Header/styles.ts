import styled from 'styled-components';

const Container = styled.div`
  /* LOGO FIXA NO CANTO ESQUERDO */
  #logo {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
  }

  #logo img {
    width: 250px; /* Tamanho da logo ajustado */

    height: auto;
    opacity: 0.9; /* Adiciona transparência */
    transition: opacity 0.3s ease-in-out;
  }

  .header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 3em 0;
    z-index: 2;
    transition: 0.3s ease-in-out;
    background-color: white;

    &.active {
      background-color: rgba(234, 238, 240, 0.62);
      border-bottom: 1px solid ${(props) => props.theme.secondaryColor};
      backdrop-filter: blur(0.8rem);
      padding: 2rem 0;

      @media (max-width: 930px) {
        padding: 0.5rem 0;
      }
    }
  }

  nav {
    max-width: 1280px; /* Corrigido: antes era 250px */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end; /* já que a logo está fixa */
    width: 100%;
    padding: 0 2rem;

    @media (max-width: 930px) {
      justify-content: flex-end;
      padding: 2rem;
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;

    @media (max-width: 930px) {
      position: fixed;
      right: -100%;
      top: 0;
      padding: 30px 0 86px;
      flex-direction: column;
      background-color: ${(props) => props.theme.primaryColor};
      width: 100%;
      text-align: center;
      transition: 0.4s;
      z-index: 2;
    }
  }

  nav ul {
    list-style: none;
    font-size: 1.7rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav ul a {
    color: ${(props) => props.theme.secondaryColor};
    padding: 1.5rem 2rem;
    transition: 0.4s;
  }

  nav ul a:hover {
    color: ${(props) => props.theme.secondaryColorHover};
  }

  .hamburger {
    display: none;

    @media (max-width: 930px) {
      display: block;
      position: fixed; /* Para não ficar atrás da logo */
      right: 30px;
      top: 20px;
      z-index: 999;
    }
  }

  .bar {
    display: block;
    width: 30px;
    height: 4px;
    margin: 6px auto;
    transition: all 0.3s ease-in-out;
    background-color: ${(props) => props.theme.secondaryColor};
  }

  .bar:nth-child(2) {
    width: 20px;
  }

  @media (max-width: 930px) {
    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(10px) rotate(-45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-10px) rotate(45deg);
    }

    .nav-menu.active {
      opacity: 1;
      right: 0;
    }

    .nav-menu ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 70px 0 50px 0;
      font-size: 3rem;
    }
  }
`;

export default Container;
