import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Container } from './styles';

import Benefits from '../../components/benificio';
import Albuns from '../../components/NossoClient';

import icone01 from '../../assets/images/avaliacao de imoves.jpg';
import icone02 from '../../assets/images/Projetos de  combate a incendio.jpg';
import icone04 from '../../assets/images/alvaras.jpg';
import icone05 from '../../assets/images/fiscalizacao de obras.jpg';
import icone06 from '../../assets/images/segplan inspeçao pedrial.jpg';
import icone07 from '../../assets/images/levatamento arquitetônico.jpg';
import icone08 from '../../assets/images/laudos tecnicos.jpg';

const WHATSAPP_LINK = 'https://wa.me/message/VOG6YD5POXPPG1';

const services = [
  {
    id: 'inspecao',
    src: icone06,
    title: 'Inspeção Predial',
    description:
      'Análise detalhada para garantir segurança, funcionalidade e valorização do imóvel.',
  },
  {
    id: 'fiscalizacao',
    src: icone05,
    title: 'Fiscalização de Obras',
    description:
      'Monitoramento técnico para assegurar conformidade com normas e projeto.',
  },
  {
    id: 'alvaras',
    src: icone04,
    title: 'Alvarás de Localização',
    description:
      'Regularização profissional com emissão de alvará municipal aprovada.',
  },
  {
    id: 'avcb',
    src: icone02,
    title: 'AVCB dos Bombeiros',
    description:
      'Documento essencial para funcionamento seguro e prevenção contra incêndios.',
  },

  {
    id: 'Avaliação',
    src: icone01,
    title: 'Avaliação de Imóveis',
    description: 'Transparência e confiabilidade na avaliação do seu imóvel.',
  },
  {
    id: 'laudos',
    src: icone08,
    title: 'Laudos Técnicos',
    description:
      'Emissão de documentos periciais com rigor técnico e validade jurídica.',
  },
  {
    id: 'arquitetonico',
    src: icone07,
    title: 'Arquitetônico',
    description:
      'Antes de reformar ou regularizar, faça o levantamento arquitetônico.',
  },
];

export default function ServicesSection() {
  return (
    <Container>
      <section id="services">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>

          <div id="skills-container">
            {services.map((service) => (
              <div className="skill-card" key={service.id}>
                <div className="icon-wrapper">
                  <img src={service.src} alt={service.title} />
                </div>

                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '80px' }}>
            <Albuns />
            <Benefits />
          </div>
        </div>
      </section>
    </Container>
  );
}
