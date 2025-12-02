import styled from 'styled-components';

const Container = styled.div`
  /* LOGO FIXA NO CANTO ESQUERDO */
  #logo {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 50;
  }

  #logo img {
    width: 220px;
    padding: 15px 0;
    height: auto;
    opacity: 0.95;
    transition: 0.3s;

    @media (max-width: 930px) {
      width: 160px; /* Reduz para caber melhor no mobile */
      padding: 10px 0;
    }
  }

  /* HEADER FIXO */
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 2.5rem 0;
    display: flex;
    justify-content: center;
    background: #f8f9fa;
    z-index: 40;
    transition: 0.3s ease-in-out;

    &.active {
      padding: 1.2rem 0;
      background: rgba(248, 249, 250, 0.9);
      backdrop-filter: blur(10px);

      @media (max-width: 930px) {
        padding: 0.8rem 0;
      }
    }
  }

  nav {
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 2rem;

    @media (max-width: 930px) {
      padding: 0 1.5rem;
    }
  }

  /* MENU DESKTOP */
  .nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;

    @media (max-width: 930px) {
      position: fixed;
      right: -100%;
      top: 0;
      height: 100vh;
      width: 80%;
      padding: 120px 0 40px;
      background: ${(props) => props.theme.primaryColor};
      flex-direction: column;
      gap: 30px;
      transition: 0.4s ease;
      z-index: 90;
      backdrop-filter: blur(8px);
    }
  }

  nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 1.7rem;
    font-weight: 600;

    @media (max-width: 930px) {
      flex-direction: column;
      gap: 25px;
      font-size: 2.6rem;
    }
  }

  nav ul a {
    color: ${(props) => props.theme.secondaryColor};
    padding: 1rem 1.5rem;
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme.secondaryColorHover};
    }

    @media (max-width: 930px) {
      color: #0f0e0eff;
    }
  }

  /* HAMBURGER */
  .hamburger {
    display: none;

    @media (max-width: 930px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      position: fixed;
      top: 22px;
      right: 25px;
      width: 35px;
      height: 35px;
      cursor: pointer;
      z-index: 200; /* mais alto que logo e menu */
    }
  }

  .bar {
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.secondaryColor};
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 930px) {
    .hamburger.active .bar:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
    }
    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
    }

    .nav-menu.active {
      right: 0;
    }
  }
`;

export default Container;
