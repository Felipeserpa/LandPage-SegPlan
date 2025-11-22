import styled from 'styled-components';

const Container = styled.div`
  .section-blue {
    padding-bottom: 0;
  }

  .section-container {
    width: 100%;
    margin: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 930px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  footer p {
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.secondaryColor};
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  footer .social-links {
    padding: 0 4rem;
  }

  footer .container {
    height: 9rem;
    width: 100%;
    background-color: ${(props) => props.theme.black};
    padding: 2rem;
    text-align: center;
    @media (max-width: 930px) {
      height: 8rem;
      width: 100%;
    }
  }
`;

export default Container;
