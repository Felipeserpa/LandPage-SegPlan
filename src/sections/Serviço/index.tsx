// Seu arquivo Skills.jsx (Sugestão de nome: ServicesSection.jsx)
import React from 'react';
import { IoBarbellOutline } from 'react-icons/io5';
import { BsBuilding } from 'react-icons/bs';
import { BiFileFind } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import Container from './styles'; // Styled-Components

import Benefits from '../../components/benificio'; // Componente de Benefícios
import Albuns from '../../components/NossoClient'; // Componente de Benefícios
import { FaBomb } from 'react-icons/fa';
import icone01 from '../../assets/images/icone1.png';
import icone02 from '../../assets/images/icone2.png';
import icone03 from '../../assets/images/icon fiscalizacao.png';
import icone04 from '../../assets/images/icon laudo.png';
import icone05 from '../../assets/images/icon fiscalizacao.png';

const services = [
  {
    // Usando FcOrganization (ícone de empresa)
    icon: <BsBuilding className="service-icon" />,
    title: 'Inspeção Predial',
    description:
      'Análise detalhada para garantir a segurança, funcionalidade e valorização do seu imóvel.',
  },
  {
    // Usando IoBarbellOutline (ícone de Força/Estrutura - Adaptei para Fiscalização)
    icon: <FaUser className="service-icon" />,
    title: 'Fiscalização de Obras',
    description:
      'Acompanhamento e controle de qualidade para o cumprimento do projeto e normas.',
  },
  {
    // Usando BsDropletFill (Ícone genérico - Adaptei para Laudos)
    icon: <BiFileFind className="service-icon" />,
    title: 'Laudos Técnicos',
    description:
      'Documentos essenciais para comprovar o estado da edificação e conformidade.',
  },
  {
    // Usando BsDropletFill (Ícone genérico - Adaptei para Laudos)
    src: icone01,
    title: 'Alvarás de localização e funcionamento',
    description:
      'Legalize seu negócio com o Alvará de Funcionamento. Garantia de conformidade e segurança.',
  },
  {
    // Usando BsDropletFill (Ícone genérico - Adaptei para Laudos)
    src: icone02,
    title: ' AVCB dos Bombeiros',
    description:
      'AVCB: Segurança e conformidade garantida. Proteja seu patrimônio com nosso serviço especializado.',
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
                  <div className="icon-wrapper">
                    {service.src ? (
                      <img src={service.src} alt={service.title} />
                    ) : (
                      service.icon
                    )}
                  </div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <a
                    href="https://wa.me/SEUNUMERO" // Substitua SEUNUMERO pelo seu número de WhatsApp com código do país
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-button"
                  >
                    Saiba Mais
                  </a>
                </div>
              ))}
            </div>{' '}
            <Albuns />
            <div id="skills">
              <Benefits />
            </div>
            {/* O SUBTÍTULO 'SEUS BENEFÍCIOS' SERÁ TRATADO DENTRO DO COMPONENTE <Benefits /> */}
          </div>
        </div>
      </section>
    </Container>
  );
}
