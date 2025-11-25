import styled from 'styled-components';

const Container = styled.div`
  #section-container {
    display: flex;
    flex-wrap: wrap; /* Para responsividade */
    justify-content: center;
    align-items: center;
    gap: 2rem; /* Espaço entre os elementos */
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .section-article p {
    flex: 1 1 40%;
    min-width: 300px;
    color: ${(props) => props.theme.black};
    padding: 0.6rem;
    box-sizing: border-box;
  }

  #skills-container {
    flex: 1 1 50%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    .section-container {
      flex-direction: column;
      align-items: center;
    }

    .section-article,
    #skills-container {
      width: 100%;
      text-align: center;
    }
  }

  .skill-card {
    border: 1px solid ${(props) => props.theme.black};
    width: 25rem;
    padding: 2rem;
    margin-left: 5rem;
    text-align: center;
    transition: 0.5s ease-in-out;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.05);
      background-color: rgba(0, 0, 0, 0.3);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 930px) {
      width: 18rem;
      padding: 1.5rem;
    }
  }

  .skill-card h2 {
    color: Black;
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 1rem;

    @media (max-width: 930px) {
      font-size: 1.7rem;
    }
  }

  .skill-card p {
    color: #0e0c0cff;
    font-size: 1.4rem;
    line-height: 1.6;
    padding: 0 1rem;

    @media (max-width: 930px) {
      font-size: 1.2rem;
    }
  }

  .icon {
    font-size: 7rem;
    color: ${(props) => props.theme.secondaryColor};
    margin-bottom: 1rem;

    @media (max-width: 930px) {
      font-size: 5rem;
    }
  }
`;
export default Container;
