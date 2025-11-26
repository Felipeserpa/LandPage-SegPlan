import styled from 'styled-components';

const Container = styled.div`
  .section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  #skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }

  .skill-card {
    background: linear-gradient(135deg, #f0f4ff, #e6f0ff);
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 2rem;
    width: 30rem; /* Aumentado para deixar o card mais largo */
    margin-left: 5rem;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;

    &:hover {
      transform: translateY(-5px) scale(1.05);
      background-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    h2 {
      font-size: 2rem;
      margin: 1rem 0;
      color: #000;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.5;
      margin-bottom: 1.5rem;
      color: #333;
    }

    button {
      background-color: ${(props) => props.theme.secondaryColor};
      color: #fff;
      border: none;
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${(props) =>
          (props.theme as any).secondaryHover || '#555'};
      }
    }
  }

  .icon {
    font-size: 5rem;
    color: ${(props) => props.theme.secondaryColor};
    margin-bottom: 1rem;
  }

  .section-subtitle {
    font-size: 3rem;
    text-align: center;
    margin-top: 2rem;
    color: black;
  }

  @media (max-width: 768px) {
    .skill-card {
      width: 90%;
      padding: 1.5rem;
    }

    .icon {
      font-size: 4rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default Container;
