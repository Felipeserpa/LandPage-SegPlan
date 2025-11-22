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
    color: ${(props) => props.theme.aliceBlue};
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
