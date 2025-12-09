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
`;

export default Container;
