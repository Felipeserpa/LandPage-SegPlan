import styled from 'styled-components';

const FaqContainer = styled.section`
  width: 100%;
  padding: 100px 2rem;
  background-color: #f8fafc; /* Fundo cinza bem claro sutil */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  .conteudo-wrapper {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 64px;
    align-items: start;
  }

  /* ==========================================================================
     COLUNA ESQUERDA (TÍTULO E TEXTO DE SUPORTE)
     ========================================================================== */
  .coluna-esquerda {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: sticky;
    top: 40px;
  }

  .tag-perguntas {
    align-self: flex-start;
    display: inline-flex;
    padding: 6px 14px;
    border-radius: 100px;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #2563eb;
  }

  h2 {
    font-size: 46px;
    font-weight: 900;
    color: #031b4e;
    line-height: 1.1;
    margin: 0;
    letter-spacing: -1px;
  }

  .text-gradient {
    background: linear-gradient(90deg, #2563eb, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
  }

  .suporte-texto {
    font-size: 14px;
    line-height: 1.6;
    color: #64748b;
    margin: 0 0 12px 0;
    max-width: 280px;
  }

  .btn-perguntar {
    align-self: flex-start;
    background: #031b4e;
    color: #ffffff;
    padding: 14px 28px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(3, 27, 78, 0.1);
    transition: background 0.2s;
  }

  .btn-perguntar:hover {
    background: #0b3282;
  }

  /* ==========================================================================
     COLUNA DIREITA (ACCORDION DE DÚVIDAS)
     ========================================================================== */
  .accordion-box {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(3, 27, 78, 0.02);
  }

  .accordion-item {
    border-bottom: 1px solid #e2e8f0;
  }

  .accordion-item:last-child {
    border-bottom: none;
  }

  /* Cabeçalho clicável da pergunta */
  .accordion-header {
    width: 100%;
    padding: 24px 32px;
    background: none;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    cursor: pointer;
    text-align: left;
    transition: background 0.2s;
  }

  .accordion-header:hover {
    background: #f8fafc;
  }

  .accordion-header span {
    font-size: 15px;
    font-weight: 600;
    color: #1e3a8a; /* Azul marinho suave para links de perguntas */
    transition: color 0.2s;
  }

  .accordion-header:hover span {
    color: #2563eb;
  }

  /* Ícone dinâmico (+ / -) */
  .icon-toggle {
    font-size: 18px;
    font-weight: 400;
    color: #64748b;
    user-select: none;
    transition: transform 0.2s ease;
  }

  .accordion-item.active .icon-toggle {
    transform: rotate(
      45px
    ); /* Transforma o + em x caso prefira, ou controlamos via caractere */
  }

  /* Corpo com o texto explicativo oculto/visível */
  .accordion-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
    background: #ffffff;
  }

  .accordion-item.active .accordion-body {
    max-height: 500px; /* Altura limite segura para transição dinâmica */
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
  }

  .accordion-content {
    padding: 0 32px 24px 32px;
    font-size: 14px;
    line-height: 1.6;
    color: #475569;
  }

  /* RESPONSIVIDADE */
  @media (max-width: 992px) {
    .conteudo-wrapper {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .coluna-esquerda {
      position: static;
    }

    h2 {
      font-size: 36px;
    }
  }

  @media (max-width: 640px) {
    padding: 60px 1.5rem;

    .accordion-header {
      padding: 20px 24px;
    }

    .accordion-content {
      padding: 0 24px 20px 24px;
    }
  }
`;

export default FaqContainer;
