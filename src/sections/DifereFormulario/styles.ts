import styled from 'styled-components';

const ContatoContainer = styled.section`
  width: 100%;
  padding: 100px 2rem;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  .conteudo-wrapper {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 64px;
    align-items: start;
  }

  /* ==========================================================================
     COLUNA DA ESQUERDA: DIFERENCIAIS
     ========================================================================== */
  .coluna-esquerda {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .header-diferenciais {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .tag-por-que {
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
    font-size: 42px;
    font-weight: 900;
    color: #031b4e;
    line-height: 1.15;
    letter-spacing: -1px;
    margin: 0;
  }

  .text-gradient {
    background: linear-gradient(90deg, #2563eb, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* LISTA DE CARDS DE DIFERENCIAIS */
  .diferenciais-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card-diferencial {
    display: flex;
    gap: 20px;
    padding: 28px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(3, 27, 78, 0.01);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .card-diferencial:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(3, 27, 78, 0.04);
  }

  .icon-holder {
    width: 48px;
    height: 48px;
    background: #eff6ff;
    color: #2563eb;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .textos-diferencial h3 {
    font-size: 16px;
    font-weight: 700;
    color: #031b4e;
    margin: 0 0 8px 0;
  }

  .textos-diferencial p {
    font-size: 13.5px;
    line-height: 1.5;
    color: #64748b;
    margin: 0;
  }

  /* ==========================================================================
     COLUNA DA DIREITA: FORMULÁRIO CONTAINER
     ========================================================================== */
  .card-formulario {
    background: #031b4e;
    border-radius: 24px;
    padding: 44px 36px;
    box-shadow: 0 20px 40px rgba(3, 27, 78, 0.15);
    color: #ffffff;
  }

  .card-formulario h3 {
    font-size: 28px;
    font-weight: 800;
    margin: 0 0 12px 0;
    letter-spacing: -0.5px;
  }

  .card-formulario .sub-form {
    font-size: 13.5px;
    color: #93c5fd;
    line-height: 1.5;
    margin: 0 0 32px 0;
  }

  /* FORM COMPONENTES */
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .input-group {
    width: 100%;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 14px 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    color: #ffffff;
    font-size: 14px;
    font-family: inherit;
    transition: border-color 0.2s, background 0.2s;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: #3b82f6;
    background: rgba(255, 255, 255, 0.08);
  }

  input::placeholder,
  textarea::placeholder {
    color: #94a3b8;
  }

  select {
    appearance: none;
    cursor: pointer;
    color: #ffffff;
  }

  select option {
    background: #031b4e;
    color: #ffffff;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  /* BOTÕES DE ENVIO */
  .btn-submit {
    width: 100%;
    padding: 15px;
    background: #3b82f6;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
    margin-top: 8px;
  }

  .btn-submit:hover {
    background: #2563eb;
  }

  /* DIVISOR INTERNO WHATSAPP */
  .whatsapp-divider {
    text-align: center;
    margin: 24px 0 16px 0;
    font-size: 12px;
    color: #94a3b8;
  }

  .btn-whatsapp {
    width: 100%;
    padding: 14px;
    background: #10b981;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-decoration: none;
    transition: background 0.2s;
  }

  .btn-whatsapp:hover {
    background: #059669;
  }

  /* RESPONSIVIDADE */
  @media (max-width: 1024px) {
    .conteudo-wrapper {
      grid-template-columns: 1fr;
      gap: 48px;
    }
    h2 {
      font-size: 36px;
    }
  }

  @media (max-width: 640px) {
    padding: 60px 1.5rem;

    .card-formulario {
      padding: 32px 20px;
    }

    h2 {
      font-size: 30px;
    }
  }
`;

export default ContatoContainer;
