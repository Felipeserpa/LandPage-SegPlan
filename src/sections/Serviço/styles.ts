import styled from 'styled-components';

export const Container = styled.div`
  #services {
    background-color: #f8f9fa;
    padding: 20px 0 80px 0;
    width: 100%;
  }

  .container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-title {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 800;
    color: #0b1d10;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: -1px;
  }

  #skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  .skill-card {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    /* Desktop: 4 colunas */
    width: calc(25% - 20px);
    min-width: 270px;
  }

  .skill-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
    border-color: #25d366;
  }

  /* 📌 IMAGEM: Mantendo a altura grande em todas as telas */
  .icon-wrapper {
    width: 100%;
    height: 380px; /* Altura principal que você gostou */
    overflow: hidden;
    background: #f0f0f0;
  }

  .icon-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a foto preencha o espaço sem sobrar fundo */
    display: block;
  }

  .card-content {
    padding: 20px;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .card-content h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #0b1d10;
    margin-bottom: 10px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-content p {
    font-size: 0.85rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  .card-button {
    background-color: #25d366;
    color: #fff !important;
    text-decoration: none !important;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: fit-content;
    align-self: center;
    margin-top: auto;
    margin-bottom: 25px;
    transition: 0.3s;
    box-shadow: 0 4px 10px rgba(37, 211, 102, 0.2);
  }

  /* 📱 RESPONSIVIDADE (Ajustando apenas a largura dos cards) */

  @media (max-width: 1150px) {
    .skill-card {
      width: calc(33.33% - 20px);
    }
  }

  @media (max-width: 850px) {
    .skill-card {
      width: calc(50% - 20px);
    }
    .icon-wrapper {
      height: 380px; /* Mantém igual ao desktop no tablet */
    }
  }

  @media (max-width: 600px) {
    .skill-card {
      width: 100%; /* Card ocupa a largura toda do celular */
      min-width: unset;
    }

    .icon-wrapper {
      /* 📌 No mobile, mantemos os 380px conforme sua preferência */
      height: 380px;
    }

    .section-title {
      font-size: 1.6rem;
    }
  }
`;
