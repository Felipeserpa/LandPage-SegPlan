import styled from 'styled-components';

const QuemSomosContainer = styled.section`
  width: 100%;
  background: #ffffff;
  color: #1e293b;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  padding: 100px 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .conteudo-wrapper {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 80px;
    align-items: center;
  }

  /* ==========================================================================
     LADO ESQUERDO: CARD VISUAL COM LOGO E EMBLEMA
     ========================================================================== */
  .bloco-visual {
    position: relative;
    width: 100%;
    max-width: 480px;
    aspect-ratio: 4 / 3;
    background: linear-gradient(135deg, #0b3282 0%, #031b4e 100%);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 40px rgba(3, 27, 78, 0.15);
  }

  .marca-centro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    color: #ffffff;
  }

  .icone-s {
    width: 56px;
    height: 56px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 800;
    color: #60a5fa;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .marca-centro h4 {
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 1px;
    margin: 0;
  }

  .marca-centro span {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #93c5fd;
    font-weight: 600;
  }

  /* Emblema Flutuante (15+ Anos de Experiência) */
  .emblema-experiencia {
    position: absolute;
    bottom: -20px;
    right: -20px;
    background: #ffffff;
    padding: 16px 24px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    border: 1px solid #f1f5f9;
  }

  .emblema-experiencia .numero {
    font-size: 32px;
    font-weight: 800;
    color: #031b4e;
    line-height: 1;
  }

  .emblema-experiencia .texto {
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
    line-height: 1.3;
    text-transform: uppercase;
    max-width: 80px;
  }

  /* ==========================================================================
     LADO DIREITO: TEXTOS INSTITUCIONAIS
     ========================================================================== */
  .bloco-textos {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h2 {
    font-size: 44px;
    font-weight: 800;
    color: #031b4e;
    line-height: 1.15;
    letter-spacing: -1px;
    margin: 0;
  }

  .titulo-azul {
    color: #2563eb;
  }

  .paragrafos {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .paragrafos p {
    font-size: 15px;
    line-height: 1.6;
    color: #475569;
    margin: 0;
  }

  /* Grid de Pilares Técnicos */
  .pilares-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 12px;
  }

  .pilar-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .pilar-icon {
    color: #2563eb;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
  }

  .pilar-info h5 {
    font-size: 14px;
    font-weight: 700;
    color: #031b4e;
    margin: 0 0 2px 0;
  }

  .pilar-info p {
    font-size: 13px;
    color: #64748b;
    margin: 0;
  }

  /* ==========================================================================
     PAINEL FISCAL / DADOS DA EMPRESA
     ========================================================================== */
  .dados-empresa-box {
    margin-top: 20px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 16px 20px;
  }

  .dados-empresa-box span {
    display: block;
    font-size: 11px;
    font-weight: 700;
    color: #94a3b8;
    text-transform: uppercase;
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  }

  .dados-empresa-box h6 {
    font-size: 13px;
    font-weight: 700;
    color: #334155;
    margin: 0 0 4px 0;
  }

  .dados-empresa-box p {
    font-size: 12px;
    color: #64748b;
    margin: 0;
    line-height: 1.5;
  }

  /* RESPONSIVIDADE */
  @media (max-width: 992px) {
    padding: 60px 1.5rem;

    .conteudo-wrapper {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    .bloco-visual {
      margin: 0 auto;
    }

    h2 {
      font-size: 32px;
    }

    .emblema-experiencia {
      right: 10px;
    }
  }

  @media (max-width: 576px) {
    .pilares-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default QuemSomosContainer;