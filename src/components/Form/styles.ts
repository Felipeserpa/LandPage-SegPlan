import styled from 'styled-components';

const Container = styled.div`
  width: 900px;
  @media (max-width: 920px) {
    width: 700px;
  }
  @media (max-width: 720px) {
    width: 500px;
  }
  @media (max-width: 520px) {
    width: 345px;
  }

  form {
    width: 100%;
    display: grid;
    margin: 0 auto;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }

  input {
    border-color: ${(props) => props.theme.primaryColor};
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    width: 100%;
    background-color: ${(props) => props.theme.darkGrey};
    color: ${(props) => props.theme.primaryColor};
    padding: 1rem;
    outline: none;
    border: 2px solid ${(props) => props.theme.darkGrey};

    &:focus {
      border-color: ${(props) => props.theme.primaryColor};
      font-size: 2rem;
    }
    &::placeholder {
      color: ${(props) => props.theme.grey};
      font-size: 2rem;
    }
  }

  textarea {
    height: 15rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: inherit;
    font-size: 2rem;
    width: 100%;
    background-color: ${(props) => props.theme.darkGrey};
    color: ${(props) => props.theme.primaryColor};
    padding: 1rem;
    outline: none;
    border: 2px solid ${(props) => props.theme.darkGrey};
    resize: none;
    grid-column: 1/3;

    @media (max-width: 700px) {
      grid-column: 1;
    }

    &:focus {
      border-color: ${(props) => props.theme.primaryColor};
    }

    &::placeholder {
      color: ${(props) => props.theme.grey};
      font-size: 2rem;
    }
  }

  button {
    width: fit-content;
    display: inline-block;
    padding: 1rem 4.7rem;
    color: ${(props) => props.theme.primaryColor};
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.primaryColor};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: 0.6s;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.grey};
      font-weight: 700;
      background-color: ${(props) => props.theme.primaryColor};
    }
  }
`;

export default Container;
