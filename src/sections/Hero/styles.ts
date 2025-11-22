import styled from 'styled-components';

const Container = styled.div`
  .presentation {
    min-height: 100vh;
    background-image: url(/cuidador.jpg);
    background-size: cover;
    background-position: top center;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px;

    @media (max-width: 930px) {
      min-height: 90vh;
      align-items: flex-start;
      padding: 60px 20px;
    }
  }

  .presentation::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.black};
    opacity: 0.5;
    z-index: -1;
  }

  .presentation div {
    width: 100%;
    max-width: 700px;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 930px) {
      max-width: 100%;
      padding-top: 20px;
    }
  }

  .presentation h1 {
    display: block;
    font-size: 3rem;
    position: relative;
    color: ${(props) => props.theme.transparent};
    animation: text_reveal 0.5s ease forwards;
    padding-left: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 100%;
  }

  .presentation h1:nth-child(1) {
    animation-delay: 0.5s;
  }

  .presentation h1:nth-child(2) {
    animation-delay: 1s;
  }

  .presentation h1:nth-child(3) {
    animation: text_reveal_name 0.1s ease forwards;
    animation-delay: 3s;
    color: #9c5000;
  }

  .presentation h1 span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 20;
    animation: text_reveal_box 1s ease forwards;
    background-color: rgb(156, 80, 0);
    animation-delay: 0.5s;
  }

  @keyframes text_reveal {
    100% {
      color: aliceblue;
    }
  }

  .presentation button {
    display: inline-block;
    padding: 1.5rem 3rem;
    font-size: 1.4rem;
    background-color: #1da851;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
    width: auto;

    &:hover {
      background-color: #1da851;
      transform: translateY(-2px);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      padding: 1rem 2rem;
    }
  }

  .box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 50px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 1s ease-out;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 30px 20px;
    }
  }

  .box > div {
    width: 50%;
    text-align: left;
    padding: 10px;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      padding: 10px 0;
    }
  }

  .box h1 {
    font-size: 34px;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .box p {
    font-size: 18px;
    color: #555;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .box button {
    font-size: 18px;
    padding: 12px 20px;

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 10px 15px;
    }
  }

  .video-container {
    width: 50%;
    text-align: center;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 20px;
    }
  }

  .video-container video {
    width: 100%;
    height: auto;
    max-height: 420px;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .stats {
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
    width: 100%;
    max-width: 900px;
    animation: fadeInUp 1.2s ease-out;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .stats div {
    text-align: center;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  .stats h2 {
    font-size: 28px;
    color: #007bff;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  .stats p {
    font-size: 16px;
    color: #e2e2dc;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  .box button {
    font-size: 18px;
    padding: 12px 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 200px; /* Defina a largura mínima */
    min-height: 50px; /* Defina a altura mínima */
    border-radius: 50px;
    background-color: #25d366;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    box-sizing: border-box;

    &:hover {
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      /* Remover estilos responsivos desnecessários */
      margin: 0 auto; /* Manter o botão centralizado */
    }
  }
`;

export default Container;
