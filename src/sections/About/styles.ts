import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  padding: 80px 2rem;
  background-color: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  /* ==========================================================================
     CABEÇALHO DA SEÇÃO (NOSSA EQUIPE)
     ========================================================================== */
  .section-header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .tag-equipe {
    display: inline-flex;
    align-items: center;
    padding: 6px 16px;
    border-radius: 100px;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.2);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #2563eb;
  }

  h2 {
    font-size: 44px;
    font-weight: 800;
    color: #031b4e;
    line-height: 1.15;
    letter-spacing: -1px;
    margin: 0;
    max-width: 700px;
  }

  .text-gradient {
    background: linear-gradient(90deg, #2563eb, #3b82f6, #0284c7);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitulo {
    color: #64748b;
    font-size: 15px;
    margin: 0;
  }

  /* ==========================================================================
     GRID DE CARDS (LADO A LADO)
     ========================================================================== */
  .team-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    max-width: 1100px;
    width: 100%;
  }

  /* O CARD INDIVIDUAL */
  .profile-card {
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(3, 27, 78, 0.04);
    border: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .profile-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px rgba(3, 27, 78, 0.08);
  }

  /* BLOCO SUPERIOR DO CARD (GRADIENTE AZUL) */
  .card-top-banner {
    height: 140px;
    background: linear-gradient(135deg, #0b3282 0%, #1e40af 100%);
    position: relative;
    padding: 20px;
  }

  /* Tag Flutuante de Status (CREA ATIVO / DIRETOR) */
  .status-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
    letter-spacing: 0.5px;
  }

  /* CONTAINER DA FOTO FOCADO NA SOBREPOSIÇÃO */
  .photo-container {
    align-self: center;
    margin-top: -65px; /* Puxa metade do círculo para cima do banner */
    position: relative;
    z-index: 5;
    width: 120px;
    height: 120px;
    background: #ffffff;
    border-radius: 50%;
    padding: 6px; /* Borda branca grossa ao redor da foto */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  .avatar-placeholder {
    width: 100%;
    height: 100%;
    background: #e2e8f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    overflow: hidden;
  }

  .avatar-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ==========================================================================
     CONTEÚDO INTERNO (TEXTOS E LISTAS)
     ========================================================================== */
  .card-body {
    padding: 24px 32px 40px 32px;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .engineer-name {
    font-size: 26px;
    font-weight: 900;
    color: #031b4e;
    margin: 0 0 4px 0;
    letter-spacing: -0.5px;
  }

  .engineer-subname {
    font-size: 14px;
    font-weight: 600;
    color: #2563eb;
    margin: 0 0 8px 0;
  }

  .role-label {
    font-size: 13px;
    color: #64748b;
    margin: 0 0 16px 0;
  }

  /* Botãozinho oval de Registro ou Cargo no centro */
  .badge-info-center {
    align-self: center;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 18px;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 600;
    color: #2563eb;
    margin-bottom: 32px;
  }

  /* SEÇÃO DAS LISTAS DE ATUAÇÃO / RESPONSABILIDADES */
  .list-section {
    text-align: left;
    border-top: 1px solid #f1f5f9;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .list-section h4 {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #031b4e;
    letter-spacing: 0.5px;
    margin: 0;
  }

  .qualification-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .qualification-list li {
    font-size: 13.5px;
    color: #475569;
    line-height: 1.5;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  /* Marcador em azul idêntico ao da imagem */
  .qualification-list li::before {
    content: '•';
    color: #3b82f6;
    font-size: 16px;
    line-height: 1;
    margin-top: 1px;
  }

  /* RESPONSIVIDADE */
  @media (max-width: 868px) {
    padding: 60px 1.5rem;

    .team-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    h2 {
      font-size: 32px;
    }

    .card-body {
      padding: 24px 20px 32px 20px;
    }
  }
`;

export default Container;
