import styled from 'styled-components';

const Container = styled.div`
  .screen {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 999;
  }

  #loading {
    min-height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .circle {
    position: absolute;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: 1px 2px 1px #fff;
    animation: spin 1s linear infinite;
  }

  .circle:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba (255, 255, 255, 0.3);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Container;
