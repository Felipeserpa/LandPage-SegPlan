import styled from 'styled-components';

const Container = styled.div`
  #services {
    background: #f8f8f8;
    padding: 10px 0;
  }

  .container {
    width: min(1200px, 92%);
    margin: auto;
  }

  .section-title {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 800;
    margin-bottom: 10px;
    color: #0b1d10;
  }

  /* 📌 4 por linha desktop */
  #skills-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 35px;
  }

  /* CARD */
  .skill-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    height: 430px; /* 🔥 padroniza todos no mesmo tamanho */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* mantém botão alinhado embaixo */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }

  /* 🔥 imagem 100% sem cortar */
  .icon-wrapper {
    width: 100%;
    height: 200px;
    background: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-wrapper img {
    width: 150%;
    height: 100%;
    object-fit: contain; /* mostra a imagem completa */
    padding-top: 1%;
  }

  /* 📌 Conteúdo igual para todos */
  .card-content {
    padding: 18px 20px;
    flex-grow: 1;
  }

  .card-content h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0b1d10;
    text-align: center;
    margin-bottom: 10px;
  }

  .card-content p {
    font-size: 0.95rem;
    color: #444;
    height: 75px; /* 🔥 controla altura do texto */
    overflow: hidden;
    text-align: center;
  }

  /* botão AGORA TODOS IGUAIS */
  .card-button {
    background: #25d366; /* Verde WhatsApp */
    color: #fff;
    font-size: 0.85rem;
    font-weight: 700;
    padding: 8px 18px; /* 🔥 fino e menor */
    border-radius: 6px; /* elegante */
    margin: 15px auto 50px auto; /* 👈 Centralizado e igual em todos */
    display: block;
    width: fit-content; /* tamanho exato do botão */
    letter-spacing: 0.4px;
    transition: 0.25s ease-in-out;
  }

  .card-button:hover {
    background: #1ebe5d; /* Tom mais forte no hover */
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
  }

  /* 📌 Responsivo */
  @media (max-width: 1024px) {
    #skills-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 700px) {
    #skills-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default Container;
