import React from 'react';
import { BiFileFind } from 'react-icons/bi';
import Container from './styles';

import Benefits from '../../components/benificio';
import Albuns from '../../components/NossoClient';

import icone01 from '../../assets/images/icone1.png';
import icone02 from '../../assets/images/seguranca.jpeg';
import icone04 from '../../assets/images/alvara.jpeg';
import icone05 from '../../assets/images/fiscal Obras.jpeg';
import icone06 from '../../assets/images/inspeçao pedrial.jpeg';

// É uma boa prática definir o número de WhatsApp em um local central
// para facilitar a manutenção.
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
];

export default function ServicesSection() {
  return (
    <Container>
      <section id="services">
        <div className="container">
          <h2 className="section-title">NOSSOS PRINCIPAIS SERVIÇOS</h2>

          <div id="skills-container">
            {services.map((service) => (
              <div className="skill-card" key={service.id}>
                <div className="icon-wrapper">
                  <img src={service.src} alt={service.title} loading="lazy" />
                </div>

                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-button"
                >
                  Saiba Mais
                </a>
              </div>
            ))}
          </div>
          <br />
          <br />
          <Albuns />
          <Benefits />
        </div>
      </section>
    </Container>
  );
}
