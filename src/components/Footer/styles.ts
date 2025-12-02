import styled from 'styled-components';

// O Styled-Components para o Footer (Apenas o .footer-bottom foi ajustado)
const Container = styled.footer`
  background-color: #333;
  color: #f1f1f1;
  padding: 50px 20px 20px 20px;
  font-size: 0.95rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  /* ... (footer-content, cols, navigation, social, etc. - Sem Alteração) ... */

  .footer-content {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  /* ... (Demais estilos omitidos por brevidade) ... */

  /* Rodapé Inferior (Alterado para separar os itens) */
  .footer-bottom {
    border-top: 1px solid #444;
    padding-top: 20px;
    text-align: center;
    color: #999;
    font-size: 0.85rem;

    display: flex;
    flex-direction: column;
    gap: 8px; /* Espaço entre as linhas de texto */

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .developed-by a {
    color: #10c058; /* Cor de destaque para o link de desenvolvimento */
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }

  .copyright,
  .developed-by {
    margin: 0; /* Remove margens extras */
  }
`;

export default Container;
