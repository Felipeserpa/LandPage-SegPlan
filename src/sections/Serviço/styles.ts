import styled from 'styled-components';

export const Container = styled.div`
  #services {
    width: 100%;
    background-color: #f8f9fa;
    padding: 80px 0;
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
    color: #1b2b1f;
    margin-bottom: 60px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* 🔥 GRID INTELIGENTE */
  #skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

    gap: 40px;
    justify-items: center;
  }

  .skill-card {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-wrapper {
    width: 100%;
    height: 340px;
    overflow: hidden;
    border-radius: 6px;
  }

  .icon-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .card-content {
    padding-top: 20px;
    text-align: center;
  }

  .card-content h3 {
    font-size: 1.05rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #1b2b1f;
    margin-bottom: 12px;
  }

  .card-content p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: #444;
  }

  @media (max-width: 600px) {
    .section-title {
      font-size: 1.8rem;
    }

    .icon-wrapper {
      height: 300px;
    }

    .card-content p {
      font-size: 0.9rem;
    }
  }
`;
