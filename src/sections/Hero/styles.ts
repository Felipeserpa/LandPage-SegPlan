import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* ==========================================================================
     BACKGROUND ESTILO BLUEPRINT (Malha de Engenharia + Gradiente Radial)
     ========================================================================== */
  .bg-blueprint {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: #031b4e;
    background-image: radial-gradient(
        circle at 60% 40%,
        rgba(14, 75, 180, 0.45) 0%,
        rgba(3, 27, 78, 0) 60%
      ),
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 100% 100%, 45px 45px, 45px 45px;
  }

  /* Círculos técnicos de engenharia no fundo */
  .bg-blueprint::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -5%;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.05);
    pointer-events: none;
  }

  /* ==========================================================================
     CONTEÚDO HERO SECTION
     ========================================================================== */
  .hero-content {
    position: relative;
    z-index: 10;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 100px 2rem 60px 2rem; /* Ajustado sem a folga do menu */
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 64px;
    align-items: center;
  }

  /* LADO ESQUERDO (Textos) */
  .hero-left {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .tag-localizacao {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #93c5fd;
  }

  .tag-dot {
    width: 6px;
    height: 6px;
    background: #60a5fa;
    border-radius: 50%;
  }

  h1 {
    font-size: 54px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -1px;
    margin: 0;
  }

  .text-gradient {
    background: linear-gradient(90deg, #60a5fa, #93c5fd, #22d3ee);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .descricao {
    color: #cbd5e1;
    font-size: 18px;
    line-height: 1.6;
    max-width: 540px;
    margin: 0;
  }

  .hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: #3b82f6;
    color: white;
    font-weight: 600;
    text-decoration: none;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
    transition: 0.2s;
  }

  .btn-primary:hover {
    background: #2563eb;
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: transparent;
    color: white;
    font-weight: 500;
    text-decoration: none;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: 0.2s;
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  /* LADO DIREITO (Painel de Monitoramento Vidro Fosco) */
  .hero-right {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .card-glass {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .card-header {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .icon-wrapper {
    padding: 12px;
    border-radius: 8px;
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
    border: 1px solid rgba(59, 130, 246, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-title h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }

  .card-title p {
    margin: 4px 0 0 0;
    font-size: 12px;
    color: #94a3b8;
  }

  .progress-group {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .progress-label {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #e2e8f0;
    margin-bottom: 6px;
  }

  .progress-bar-bg {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    border-radius: 100px;
  }

  .grid-cards-mini {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .card-mini {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border-radius: 12px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .icon-mini {
    padding: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-mini h4 {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
  }

  .card-mini p {
    margin: 2px 0 0 0;
    font-size: 10px;
    color: #94a3b8;
  }

  /* ==========================================================================
     CONTADORES NUMÉRICOS
     ========================================================================== */
  .counters-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 500px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 32px;
    margin-top: 48px;
  }

  .counter-item .number {
    font-size: 36px;
    font-weight: 800;
    font-family: monospace;
    display: block;
  }

  .counter-item .label {
    font-size: 12px;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 4px;
    display: block;
  }

  /* ==========================================================================
     BARRA INFERIOR DE REQUISITOS TÉCNICOS (Fundo Branco)
     ========================================================================== */
  .footer-bar {
    position: relative;
    z-index: 10;
    width: 100%;
    background: #ffffff;
    color: #334155;
    padding: 20px 0;
    border-top: 1px solid #f1f5f9;
    box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.02);
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .footer-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #475569;
  }

  .footer-item svg {
    color: #2563eb;
  }

  /* RESPONSIVIDADE */
  @media (max-width: 990px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }
    h1 {
      font-size: 38px;
    }
    .hero-content {
      padding-top: 60px;
    }
    .grid-cards-mini {
      grid-template-columns: 1fr;
    }
    .footer-container {
      justify-content: flex-start;
      gap: 16px 24px;
    }
  }
`;

export default Container;
