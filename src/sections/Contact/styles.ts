import styled from 'styled-components';

// O Styled-Components para o ContactSection
const Container = styled.div`
  padding: 80px 20px;
  background-color: #f1f1f1; /* Fundo cinza claro para destacar a seção */

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.2rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 50px;
    color: #333;
  }

  /* Layout de Duas Colunas */
  .content-wrapper {
    display: flex;
    gap: 40px;

    /* Empilha em mobile */
    flex-direction: column;

    /* Lado a Lado em desktop */
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  /* Coluna de Texto e Contatos */
  .info-column {
    flex-basis: 40%;
    padding: 20px 0;
  }

  .cta-headline {
    font-size: 1.6rem;
    font-weight: 700;
    color: #10c058; /* Cor principal de destaque */
    margin-bottom: 15px;
    line-height: 1.3;
  }

  .cta-text,
  .commitment-text {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 25px;
  }

  .commitment-text {
    font-style: italic;
    font-size: 0.9rem;
    color: #999;
  }

  /* Links de Contato */
  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  }

  .contact-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;

    &.whatsapp {
      color: #25d366; /* Cor do WhatsApp */
      &:hover {
        color: #128c7e;
      }
    }

    &.email {
      color: #007bff; /* Cor azul de destaque */
      &:hover {
        color: #0056b3;
      }
    }
  }

  /* Coluna do Formulário */
  .form-column {
    flex-basis: 60%;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
      border-color: #10c058;
      outline: none;
    }
  }

  .contact-form textarea {
    resize: vertical; /* Permite redimensionar verticalmente */
  }

  .submit-button {
    width: 100%;
    background-color: #10c058;
    color: #fff;
    border: none;
    padding: 15px;
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-transform: uppercase;

    &:hover {
      background-color: #0b8a40;
    }
  }
`;
export default Container;
