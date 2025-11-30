import styled from 'styled-components';

// O Styled-Components para o CredibilityCard
const Container = styled.div`
  padding: 60px 20px;
  background-color: #f7f7f7; /* Fundo leve para o contêiner externo */

  /* O GRANDE CARD BRANCO QUE CONTÉM OS DOIS PERFIS */
  .credibility-card-wrapper {
    max-width: 15000px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Sombra mais forte */
  }

  /* Estilo para cada linha de perfil (Marcello vs Marcelo) */
  .profile-row {
    margin-bottom: 20px;
    padding: 30px 0;

    /* Configuração interna do Flexbox */
    .profile-info {
      display: flex;
      gap: 40px;
      align-items: center;
      width: 100%;

      /* Padrão: Empilha em mobile */
      flex-direction: column;
      text-align: center;

      /* Desktop: Lado a Lado (Foto/Texto) */
      @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        text-align: left;
      }
    }
  }

  /* Efeito ZIG-ZAG: Inverte a ordem da FOTO e do TEXTO na segunda linha */
  .profile-row.reversed {
    border-top: 1px solid #eee; /* Linha sutil separando os dois perfis */
    margin-top: 20px;

    .profile-info {
      /* Desktop: Inverte a ordem do conteúdo para o segundo perfil */
      @media (min-width: 768px) {
        flex-direction: row-reverse;
        text-align: right;
      }

      /* Ajuste do alinhamento da lista quando invertido */
      .text-info {
        @media (min-width: 768px) {
          text-align: right;
        }
      }
      .qualification-list {
        @media (min-width: 768px) {
          padding-left: 0;
          margin-right: 0;
        }
      }
    }
  }

  /* Foto do Engenheiro (Circular) */
  .photo-wrapper {
    flex-shrink: 0;
    margin-bottom: 15px; /* Espaço para mobile */
  }

  .engineer-photo {
    width: 150px; /* Tamanho da foto aumentado */
    height: 150px; /* Tamanho da foto aumentado */
    object-fit: cover;
    border-radius: 50%;
  }

  /* Informações de Texto */
  .text-info {
    flex-grow: 1;

    /* Ajuste da largura do texto em telas grandes */
    @media (min-width: 768px) {
      max-width: 80%;
    }
  }

  .role {
    font-size: 1.2rem; /* Tamanho da fonte aumentado */
    font-weight: 700;
    color: #10c058; /* Cor verde para o cargo/título */
    margin-bottom: 5px;
  }

  .name {
    font-size: 1.5rem; /* Tamanho da fonte aumentado */
    font-weight: 800;
    color: #333;
    margin: 0;
  }

  .crea {
    font-size: 1rem; /* Tamanho da fonte aumentado */
    color: #777;
    margin-bottom: 15px;
  }

  /* Lista de Qualificações */
  .qualification-list {
    list-style: none;
    padding: 0;
    margin-top: 15px;
  }

  .qualification-list li {
    font-size: 1.1rem; /* Tamanho da fonte aumentado */
    color: #555;
    line-height: 1.6;

    /* Ponto de lista personalizado (pode ser o ✓ ou um •) */
    &::before {
      content: '•'; /* Usando ponto para replicar o design da imagem */
      color: #10c058;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-right: 5px;
    }
  }
`;
export default Container;
