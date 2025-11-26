import React from 'react';
import styled from 'styled-components';
import {
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaThumbsUp,
  FaStar,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaCheckCircle />,
    title: 'Qualidade Garantida',
    description:
      'Compromisso com a excelência em cada detalhe, assegurando a máxima qualidade em nossos serviços.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Segurança',
    description:
      'Priorizamos a segurança em todas as etapas do projeto, garantindo tranquilidade e conformidade.',
  },
  {
    icon: <FaClock />,
    title: 'Prazos Cumpridos',
    description:
      'Respeitamos o seu tempo com um planejamento eficiente e execução pontual.',
  },
  {
    icon: <FaThumbsUp />,
    title: 'Satisfação do Cliente',
    description:
      'Sua satisfação é nossa maior recompensa e o principal indicador de nosso sucesso.',
  },
  {
    icon: <FaStar />,
    title: 'Excelência Técnica',
    description:
      'Nossa equipe é formada por profissionais altamente qualificados para entregar os melhores resultados.',
  },
];

const Container = styled.div`
  .benefits-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .benefit-card {
    background: linear-gradient(135deg, #f0f4ff, #e6f0ff);
    padding: 3rem;
    border-radius: 15px;
    text-align: center;
    width: 20rem; /* Aumentado para deixar o card mais largo */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      background: linear-gradient(135deg, #d9e4ff, #cce0ff);
    }

    @media (max-width: 768px) {
      width: 45%;
      margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
      width: 90%;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #0a0a0a;
      margin-top: 0.5rem;
    }

    .benefit-icon {
      font-size: 3rem;
      color: #007bff;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 1rem;
      color: #555;
      margin-top: 0.5rem;
      display: block; // Alterado para exibir a descrição
    }
  }
`;

export default function Benefits() {
  return (
    <Container>
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
