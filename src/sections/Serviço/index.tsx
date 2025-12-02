// Seu arquivo Skills.jsx (Sugestão de nome: ServicesSection.jsx)
import React from 'react';
import { IoBarbellOutline } from 'react-icons/io5';
import { BsDropletFill } from 'react-icons/bs';
import { FcOrganization } from 'react-icons/fc';
import Container from './styles'; // Styled-Components

import Benefits from '../../components/benificio'; // Componente de Benefícios
import Albuns from '../../components/NossoClient'; // Componente de Benefícios

const services = [
  {
    // Usando FcOrganization (ícone de empresa)
    icon: <FcOrganization className="service-icon" />,
    title: 'Inspeção Predial',
    description:
      'Análise detalhada para garantir a segurança, funcionalidade e valorização do seu imóvel.',
  },
  {
    // Usando IoBarbellOutline (ícone de Força/Estrutura - Adaptei para Fiscalização)
    icon: <IoBarbellOutline className="service-icon" />,
    title: 'Fiscalização de Obras',
    description:
      'Acompanhamento e controle de qualidade para o cumprimento do projeto e normas.',
  },
  {
    // Usando BsDropletFill (Ícone genérico - Adaptei para Laudos)
    icon: <BsDropletFill className="service-icon" />,
    title: 'Laudos Técnicos',
    description:
      'Documentos essenciais para comprovar o estado da edificação e conformidade.',
  },
];

export default function ServicesSection() {
  // Renomeado para ServicesSection
  return (
    <Container>
      <section
        id="services" // Melhor ID para a seção
        className="section-white"
      >
        <div className="container">
          <h2 className="section-title text-black">
            NOSSOS PRINCIPAIS SERVIÇOS
          </h2>

          <div className="services-container">
            {' '}
            {/* Renomeado para clareza */}
            <div id="skills-container" data-aos="fade-up">
              {services.map((service, index) => (
                <div className="skill-card" key={index}>
                  <div className="icon-wrapper">{service.icon}</div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <button className="card-button">Saiba Mais</button>
                </div>
              ))}
            </div>
            <p>Fotos</p>
            <Albuns />
            {/* O SUBTÍTULO 'SEUS BENEFÍCIOS' SERÁ TRATADO DENTRO DO COMPONENTE <Benefits /> */}
            <Benefits />
          </div>
        </div>
      </section>
    </Container>
  );
}
