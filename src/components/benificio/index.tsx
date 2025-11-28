// Seu arquivo Benefits.jsx COMPLETO E CORRIGIDO

import React from 'react';
import styled from 'styled-components';
import {
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaThumbsUp,
  FaStar,
} from 'react-icons/fa';

// Dados
const benefits = [
  {
    icon: <FaCheckCircle />,
    title: 'Garantia de Qualidade',
    description:
      'Compromisso com a excelência em cada detalhe, assegurando a máxima qualidade em nossos serviços.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Segurança e Conformidade',
    description:
      'Priorizamos a segurança em todas as etapas do projeto e garantimos total conformidade legal.',
  },
  {
    icon: <FaClock />,
    title: 'Otimização de Prazos',
    description:
      'Respeitamos o seu tempo com um planejamento eficiente e execução pontual, sem atrasos.',
  },
  {
    icon: <FaThumbsUp />,
    title: 'Foco na Satisfação',
    description:
      'Sua satisfação é nossa prioridade. Oferecemos soluções personalizadas e transparentes.',
  },
  {
    icon: <FaStar />,
    title: 'Excelência Técnica',
    description:
      'Nossa equipe é formada por profissionais altamente qualificados para entregar os melhores resultados.',
  },
];

// Styled-Component
const Container = styled.div`
  padding: 40px 20px 80px;
  background-color: #f9f9f9;
  width: 100%; /* GARANTE QUE O CONTÊINER PRINCIPAL USE 100% DA LARGURA */

  /* Título da Seção */
  .benefits-section-title {
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 40px;
    color: #333;
  }

  /* Container Principal - Configurado como Grid para Cards */
  .benefits-container {
    display: grid;
    /* TENTA CRIAR 3 COLUNAS (33%) NO MÁXIMO, USANDO MÍNIMO DE 280px */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    max-width: 1200px;
    margin: 0 auto;
    gap: 25px;
    justify-content: center; /* Centraliza os itens no contêiner */
  }

  /* Estilo do Card Individual */
  .benefit-card {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 30px 20px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .benefit-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  /* Ícone */
  .benefit-icon {
    font-size: 2.5rem;
    color: #10c058;
    margin-bottom: 15px;
  }

  .benefit-card h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #333;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .benefit-card p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.4;
    margin: 0;
    flex-grow: 1;
  }

  /* Responsividade: Garante duas colunas em tablets e uma em mobile */
  @media (max-width: 900px) {
    .benefits-container {
      /* Garante no máximo 2 colunas em telas menores */
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  @media (max-width: 600px) {
    .benefits-container {
      grid-template-columns: 1fr;
    }
  }
`;

// Componente React
export default function Benefits() {
  return (
    <Container>
      <h2 className="benefits-section-title">Seus Benefícios</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
