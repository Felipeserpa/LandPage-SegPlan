import styled from 'styled-components';

const ComoFuncionaContainer = styled.section`
  width: 100%;
  background-color: #f8fafc; /* Fundo claro sutil condizente com a seção */
  color: #1e293b;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  padding: 100px 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .conteudo-wrapper {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
  }

  /* ==========================================================================
     CABEÇALHO DA SEÇÃO
     ========================================================================== */
  .header-secao {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    max-width: 700px;
  }

  .tag-como-funciona {
    display: inline-flex;
    align-items: center;
    padding: 6px 16px;
    border-radius: 100px;
    background: rgba(37, 99, 235, 0.1);
    border: 1px solid rgba(37, 99, 235, 0.2);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #2563eb;
  }

  h2 {
    font-size: 46px;
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

  .descricao-secao {
    color: #64748b;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
  }

  /* ==========================================================================
     FLUXO DE ETAPAS (LINHA CONECTORA HORIZONTAL)
     ========================================================================== */
  .fluxo-etapas {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    margin: 20px 0;
  }

  /* Linha guia que passa por trás dos círculos */
  .fluxo-etapas::before {
    content: '';
    position: absolute;
    top: 28px; /* Alinhado exatamente ao centro vertical do círculo de 56px */
    left: 40px;
    right: 40px;
    height: 1px;
    background: #e2e8f0;
    z-index: 1;
  }

  .etapa-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 5;
    flex: 1;
    padding: 0 12px;
  }

  /* Círculo com o número da etapa */
  .numero-circulo {
    width: 56px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 900;
    color: #2563eb;
    margin-bottom: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;
  }

  .etapa-item:hover .numero-circulo {
    border-color: #2563eb;
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.1);
  }

  .etapa-info h4 {
    font-size: 15px;
    font-weight: 800;
    color: #031b4e;
    margin: 0 0 10px 0;
  }

  .etapa-info p {
    font-size: 13px;
    line-height: 1.5;
    color: #64748b;
    margin: 0;
    max-width: 200px;
  }

  /* ==========================================================================
     BOTÃO DE CHAMADA DE AÇÃO (CTA)
     ========================================================================== */
  .btn-cta {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: #031b4e;
    color: #ffffff;
    padding: 16px 32px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 8px 24px rgba(3, 27, 78, 0.15);
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .btn-cta:hover {
    background: #0b3282;
    transform: translateY(-1px);
  }

  .btn-cta svg {
    transition: transform 0.2s ease;
  }

  .btn-cta:hover svg {
    transform: translateX(4px);
  }

  /* RESPONSIVIDADE */
  @media (max-width: 992px) {
    padding: 60px 1.5rem;

    h2 {
      font-size: 34px;
    }

    .fluxo-etapas {
      flex-direction: column;
      gap: 40px;
    }

    .fluxo-etapas::before {
      display: none; /* Desativa a linha horizontal no mobile */
    }

    .etapa-item {
      flex-direction: row;
      text-align: left;
      gap: 20px;
      padding: 0;
      width: 100%;
      max-width: 450px;
      margin: 0 auto;
    }

    .numero-circulo {
      margin-bottom: 0;
      flex-shrink: 0;
    }

    .etapa-info p {
      max-width: 100%;
    }
  }
`;

export default ComoFuncionaContainer;
