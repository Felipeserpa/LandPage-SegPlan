import styled from 'styled-components';

// O Styled-Components para o FAQSection
const Container = styled.div`
  padding: 80px 20px;
  background-color: #ffffff; /* Fundo branco limpo */

  .container {
    max-width: 900px; /* Limita a largura para melhor leitura do texto */
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.2rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 10px;
    color: #333;
  }

  .accordion-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px; /* Espaço entre cada item */
  }
`;

// Estilos específicos para o item do Acordeão
export const FAQItemContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden; /* Importante para o efeito de dropdown */
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  /* Pergunta (A área clicável) */
  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 25px;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f1f1f1;
    }

    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #333;
      margin: 0;
    }

    .toggle-icon {
      color: #10c058; /* Cor principal de destaque */
      font-size: 1rem;
      transition: transform 0.3s ease;
    }
  }

  /* Resposta (A área que abre/fecha) */
  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-out, padding 0.4s ease-out;
    background-color: #ffffff;

    &.open {
      max-height: 500px; /* Valor alto para garantir que o conteúdo caiba */
      padding: 15px 25px 20px 25px; /* Adiciona padding quando aberto */
    }

    p {
      font-size: 1rem;
      color: #555;
      line-height: 1.6;
      margin: 0;
    }
    .client-photo {
      width: 60%; /* Diminuir a largura da foto */
      max-width: 120px; /* Tamanho máximo */
      height: auto; /* Mantém proporção */
      border-radius: 50%; /* Opcional: deixa redonda */
      object-fit: cover;
      display: block;
      margin: 0 auto; /* Centraliza a foto */
    }
  }
`;
export default Container;
