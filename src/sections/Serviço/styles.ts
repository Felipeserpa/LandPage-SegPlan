// Seu arquivo styles.js
import styled from 'styled-components';

const Container = styled.div`
  /* Estilos Globais da Seção */
  .section-white {
    background-color: #f9f9f9; /* Fundo cinza claro como na imagem */
    padding: 10px;
    .section-title {
      font-size: 2rem;
      font-weight: 800;
      text-align: center;
      margin-bottom: 20px;
      color: #333;
      text-transform: uppercase;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .services-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }

    /* Container dos Cards */
    #skills-container {
      /* Mantido o ID para não quebrar seu código */
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 25px; /* Espaçamento entre os cards */
      align-items: stretch; /* Garante que os cards na mesma linha tenham a mesma altura */
      width: 100%;
    }

    /* Estilo do Card Individual */
    .skill-card {
      /* O card na imagem é branco, sem gradiente forte */
      background-color: #ffffff;
      border-radius: 12px;
      padding: 30px 25px;
      flex-basis: 320px; /* Base de largura para cada card */
      flex-grow: 1; /* Permite que o card cresça se houver espaço */
      max-width: 450px; /*Largura máxima para evitar que fiquem muito grandes */
      margin: 0; /* Removido o margin-left que estava desalinhando */
      text-align: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); /* Sombra suave */
      transition: transform 0.3s, box-shadow 0.3s;
      /* Adiciona flexbox para garantir que o conteúdo se alinhe verticalmente */
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .skill-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    /* Wrapper para o círculo do ícone */
    .icon-wrapper {
      background-color: #e6f0ff; /* Cor azul claro como na imagem */
      border-radius: 50%;
      padding: 40px;
      margin-bottom: 15px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Estilo do Ícone */
    .service-icon {
      font-size: 2.5rem; /* Ajustado para um tamanho maior */
      color: #007bff; /* Cor azul de destaque no ícone */
    }

    .skill-card h2 {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 10px 0;
      color: #333;
    }

    .skill-card p {
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 20px;
      color: #666;
      flex-grow: 1; /* Garante que todos os cards tenham a mesma altura */
    }

    /* Botão "Saiba Mais" como link simples */
    .card-button {
      background: none;
      color: #10c058; /* Cor verde principal da sua landing page */
      border: 1px solid #10c058;
      padding: 8px 20px;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
      font-weight: 600;
    }

    .card-button:hover {
      background-color: #10c058;
      color: #fff;
    }

    /* Seção de Benefícios (Subtítulo da imagem) */
    /* Removemos esta parte do styles, pois ela pertence ao componente Benefits! */

    /* Responsividade */
    @media (max-width: 992px) {
      .skill-card {
        flex-basis: 280px; /* Ajusta a base de largura para telas menores */
      }
    }

    @media (max-width: 600px) {
      .skill-card {
        flex-basis: 100%; /* Um card por linha */
        padding: 20px;
      }

      .section-title {
        font-size: 1.8rem;
      }
    }
  }
`;

export default Container;
