import styled from 'styled-components';

const ServicosContainer = styled.section`
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
  padding: 100px 2rem;

  /* ==========================================================================
     BACKGROUND ESTILO BLUEPRINT (Malha de Engenharia + Gradiente Radial)
     ========================================================================== */
  .bg-blueprint {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: #031b4e;
    background-image: radial-gradient(
        circle at 50% 30%,
        rgba(14, 75, 180, 0.4) 0%,
        rgba(3, 27, 78, 0) 70%
      ),
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 100% 100%, 45px 45px, 45px 45px;
  }

  /* ==========================================================================
     CONTEÚDO E TITULAÇÃO
     ========================================================================== */
  .conteudo-wrapper {
    position: relative;
    z-index: 10;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 56px;
  }

  .header-secao {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 800px;
  }

  .tag-o-que-fazemos {
    align-self: flex-start;
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
  }

  .text-gradient {
    background: linear-gradient(90deg, #60a5fa, #93c5fd, #22d3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .descricao-secao {
    color: #94a3b8;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    max-width: 600px;
  }

  /* ==========================================================================
     GRID DE SERVIÇOS
     ========================================================================== */
  .servicos-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    width: 100%;
  }

  /* CARD ESTILO VIDRO FOSCO (GLASSMORPHISM) */
  .servico-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(16px);
    border-radius: 16px;
    padding: 40px 32px;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .servico-card:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  /* Tag de Destaque Interna (PRINCIPAL) */
  .tag-principal {
    position: absolute;
    top: 24px;
    left: 32px;
    background: rgba(59, 130, 246, 0.2);
    border: 1px solid rgba(59, 130, 246, 0.4);
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: #60a5fa;
    letter-spacing: 0.5px;
  }

  /* Ajuste do topo do card quando há tag de destaque */
  .servico-card.has-badge {
    padding-top: 60px;
  }

  /* Ícone estilizado quadrado com cantos arredondados */
  .icon-box {
    width: 48px;
    height: 48px;
    background: #2563eb;
    color: #ffffff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    box-shadow: 0 8px 16px rgba(37, 99, 235, 0.2);
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 16px 0;
    color: #ffffff;
  }

  .descricao-card {
    font-size: 14px;
    line-height: 1.6;
    color: #94a3b8;
    margin: 0 0 28px 0;
    min-height: 68px; /* Mantém o alinhamento dos textos */
  }

  /* LISTA DE REQUISITOS INTERNOS */
  .itens-list {
    list-style: none;
    padding: 0;
    margin: 0 0 40px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-grow: 1; /* Força a lista a empurrar o link de ação para o rodapé */
  }

  .itens-list li {
    font-size: 13.5px;
    color: #cbd5e1;
    line-height: 1.4;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .itens-list li::before {
    content: '•';
    color: #3b82f6;
    font-size: 16px;
    line-height: 1;
    margin-top: -1px;
  }

  /* LINK DE AÇÃO DO CARD (Ex: Solicitar laudo →) */
  .action-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #60a5fa;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
    align-self: flex-start;
  }

  .action-link:hover {
    color: #93c5fd;
  }

  .action-link svg {
    transition: transform 0.2s;
  }

  .action-link:hover svg {
    transform: translateX(4px);
  }

  /* RESPONSIVIDADE */
  @media (max-width: 1024px) {
    .servicos-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }
    h2 {
      font-size: 38px;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 1.5rem;

    .servicos-grid {
      grid-template-columns: 1fr;
    }

    h2 {
      font-size: 32px;
    }

    .servico-card {
      padding: 32px 24px;
    }
  }
`;

export default ServicosContainer;
