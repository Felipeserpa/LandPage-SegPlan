import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  position: relative;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 2rem;

  /* ==========================================================================
     BACKGROUND ESTILO BLUEPRINT (Malha de Engenharia + Gradiente Radial)
     ========================================================================== */
  .bg-blueprint {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: #031b4e;
    background-image: radial-gradient(
        circle at 50% 50%,
        rgba(14, 75, 180, 0.45) 0%,
        rgba(3, 27, 78, 0) 70%
      ),
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 100% 100%, 45px 45px, 45px 45px;
  }

  /* ==========================================================================
     CONTEÚDO DO QUIZ
     ========================================================================== */
  .quiz-content {
    position: relative;
    z-index: 10;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .tag-diagnostico {
    display: inline-flex;
    align-items: center;
    padding: 6px 16px;
    border-radius: 100px;
    background: rgba(59, 130, 246, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.3);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #60a5fa;
  }

  h2 {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -1px;
    margin: 0;
    max-width: 700px;
  }

  .text-gradient {
    background: linear-gradient(90deg, #60a5fa, #93c5fd, #22d3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitulo {
    color: #94a3b8;
    font-size: 16px;
    margin: 0 0 24px 0;
  }

  /* ==========================================================================
     PAINEL CENTRAL (CARD BOX)
     ========================================================================== */
  .quiz-card-box {
    width: 100%;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(16px);
    border-radius: 20px;
    padding: 48px 40px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Indicadores de Etapas (Dots) */
  .steps-indicator {
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }

  .dot.active {
    background: #3b82f6;
    box-shadow: 0 0 10px #3b82f6;
    width: 18px;
    border-radius: 4px;
  }

  .quiz-card-box h3 {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 8px 0;
  }

  .quiz-card-box .instrucao {
    color: #94a3b8;
    font-size: 14px;
    margin: 0 0 40px 0;
  }

  /* ==========================================================================
     GRID DE SELEÇÃO DOS IMÓVEIS
     ========================================================================== */
  .options-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
  }

  .option-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 32px 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .icon-container {
    color: #60a5fa;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .option-card span {
    font-size: 14px;
    font-weight: 600;
    color: #e2e8f0;
  }

  /* Efeitos de Interação (Hover e Selecionado) */
  .option-card:hover {
    background: rgba(59, 130, 246, 0.05);
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-2px);
  }

  .option-card:hover .icon-container {
    transform: scale(1.1);
  }

  .option-card.selected {
    background: rgba(59, 130, 246, 0.12);
    border-color: #3b82f6;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
  }

  .option-card.selected span {
    color: #ffffff;
  }

  /* RESPONSIVIDADE */
  @media (max-width: 768px) {
    padding: 60px 1.5rem;

    h2 {
      font-size: 32px;
    }

    .quiz-card-box {
      padding: 32px 20px;
    }

    .options-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .option-card {
      padding: 24px 16px;
      flex-direction: row;
      justify-content: flex-start;
      padding-left: 24px;
      gap: 20px;
    }
  }
`;

export default QuizContainer;
