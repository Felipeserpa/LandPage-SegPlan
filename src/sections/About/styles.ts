import styled from 'styled-components';

const Container = styled.div`
  #about .section-container {
    display: flex;
    align-items: center;
    margin-bottom: 10rem;
    padding: 3rem;
    width: auto;
  }

  #about article {
    padding-right: 3rem;
  }

  #about article p {
    font-size: 2rem;
    color: ${(props) => props.theme.aliceBlue};
    line-height: 2.8rem;
    padding: 10px;
  }

  #about article li {
    font-size: 2rem;
    color: ${(props) => props.theme.aliceBlue};
    line-height: 2.8rem;
  }

  /* Estilos para o container do logo */
  .container-logo {
    position: relative;
    width: auto;
    max-width: 800px;
    height: auto;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white; /* Define o fundo como branco */
    z-index: 0; /* Centraliza verticalmente */
  }

  /* Quadrado branco atrás do logo */
  .container-logo::before {
    /* Usando ::before */
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: -1;
  }

  #about picture img {
    max-width: 300px;
    height: auto;
    z-index: 1;
  }

  @media (max-width: 978px) {
    #about article p {
      text-align: left;
    }
  }

  @media (max-width: 930px) {
    #about .section-container {
      flex-direction: column;
      padding: 0 3rem;
      gap: 4rem;
    }

    #about article {
      padding: 0;
    }

    #about picture img {
      width: 34rem;
    }
  }
  @media (min-width: 931px) {
    .container-logo {
      max-width: 1200px; /* Largura máxima para telas maiores */
      padding: 50px; /* Ajuste o padding para telas maiores */
    }

    #about picture img {
      max-width: 800px; /* Largura máxima do logo para telas maiores */
    }
  }
`;

export default Container;
