import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #031b4e; /* Mesmo tom azul marinho escuro do formulário */
  padding: 80px 2rem 30px 2rem;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer-wrapper {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 0.9fr 0.9fr 1fr;
    gap: 48px;
    padding-bottom: 60px;
  }

  /* ==========================================================================
     COLUNA 1: LOGO E DESCRIÇÃO
     ========================================================================== */
  .coluna-institucional {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .logo-placeholder {
    display: flex;
    align-items: center;
    gap: 10px;

    /* Nota: Substitua pela sua tag <img /> quando tiver o arquivo da logo */
    .logo-mock {
      font-weight: 900;
      font-size: 22px;
      letter-spacing: 1px;
      color: #ffffff;

      span {
        display: block;
        font-size: 8px;
        font-weight: 600;
        letter-spacing: 2px;
        color: #3b82f6;
        margin-top: -2px;
      }
    }
  }

  .descricao-empresa {
    font-size: 14px;
    line-height: 1.6;
    color: #94a3b8;
    max-width: 320px;
    margin: 0;
  }

  .cnpj-texto {
    font-size: 13px;
    color: #64748b;
  }

  /* Redes Sociais com bordas circulares */
  .redes-sociais {
    display: flex;
    gap: 12px;
    margin-top: 8px;
  }

  .rede-icon {
    width: 36px;
    height: 36px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    transition: all 0.2s ease;
    text-decoration: none;
  }

  .rede-icon:hover {
    color: #ffffff;
    border-color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
  }

  /* ==========================================================================
     COLUNAS DE LINKS (SERVIÇOS E EMPRESA)
     ========================================================================== */
  .coluna-links {
    display: flex;
    flex-direction: column;
    gap: 24px;

    h4 {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #ffffff;
      margin: 0;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    a {
      font-size: 14px;
      color: #94a3b8;
      text-decoration: none;
      transition: color 0.2s ease;
      cursor: pointer;
    }

    a:hover {
      color: #ffffff;
    }
  }

  /* ==========================================================================
     COLUNA 4: CONTATO (COM ÍCONES)
     ========================================================================== */
  .coluna-contato {
    display: flex;
    flex-direction: column;
    gap: 24px;

    h4 {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #ffffff;
      margin: 0;
    }

    .info-lista {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 14px;
      color: #94a3b8;
      line-height: 1.4;

      svg {
        color: #3b82f6;
        flex-shrink: 0;
        margin-top: 2px;
      }
    }
  }

  /* ==========================================================================
     BARRA INFERIOR: DIREITOS E REGISTRO CREA
     ========================================================================== */
  .barra-inferior {
    width: 100%;
    max-width: 1200px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #64748b;

    p {
      margin: 0;
    }

    .crea-registro {
      display: flex;
      align-items: center;
      gap: 6px;

      .badge-crea {
        background: rgba(59, 130, 246, 0.15);
        color: #60a5fa;
        padding: 3px 8px;
        border-radius: 4px;
        font-weight: 700;
        font-size: 11px;
        letter-spacing: 0.5px;
      }
    }
  }

  /* RESPONSIVIDADE */
  @media (max-width: 1024px) {
    .footer-wrapper {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
  }

  @media (max-width: 640px) {
    padding: 60px 1.5rem 30px 1.5rem;

    .footer-wrapper {
      grid-template-columns: 1fr;
      gap: 36px;
    }

    .barra-inferior {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
  }
`;

export default FooterContainer;
