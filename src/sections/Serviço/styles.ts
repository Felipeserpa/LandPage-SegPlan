import styled from 'styled-components';

export const Container = styled.div`
  #services {
    background-color: #f8f9fa;
    padding: 60px 0 100px;
  }

  .container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-title {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 800;
    color: #0b1d10;
    margin-bottom: 60px;
    text-transform: uppercase;
    letter-spacing: -1px;
  }

  #skills-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  /* CARD */
  .skill-card {
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    transition: all 0.35s ease;
  }

  .skill-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
  }

  /* IMAGEM */
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 320px;
    overflow: hidden;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .skill-card:hover img {
    transform: scale(1.08);
  }

  /* OVERLAY */
  .image-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.1),
      transparent
    );
  }

  .image-title {
    position: absolute;
    bottom: 18px;
    left: 18px;
    right: 18px;
    z-index: 2;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.3;
  }

  /* TEXTO */
  .card-content {
    padding: 20px;
  }

  .card-content p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #555;
  }

  /* RESPONSIVO */
  @media (max-width: 1100px) {
    #skills-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 850px) {
    #skills-container {
      grid-template-columns: repeat(2, 1fr);
    }

    .image-wrapper {
      height: 300px;
    }
  }

  @media (max-width: 600px) {
    #skills-container {
      grid-template-columns: 1fr;
    }

    .section-title {
      font-size: 1.7rem;
    }

    .image-wrapper {
      height: 260px;
    }
  }
`;
