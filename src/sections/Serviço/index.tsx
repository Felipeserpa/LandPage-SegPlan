import { IoBarbellOutline } from 'react-icons/io5';
import { BsDropletFill } from 'react-icons/bs';
import { FcOrganization } from 'react-icons/fc';
import Container from './styles';

import Benefits from '../../components/benificio';
const services = [
  {
    icon: <FcOrganization className="icon" />,
    title: 'Inspeção Predial',
    description:
      'Análise minuciosa da edificação para garantir segurança e conformidade com as normas',
  },
  {
    icon: <IoBarbellOutline className="icon" />,
    title: 'Fiscalização de Obras',
    description:
      'Acompanhamento rigoroso de sua obra para assegurar a qualidade e o cumprimento de prazos',
  },
  {
    icon: <BsDropletFill className="icon" />,
    title: 'Laudos Técnicos',
    description:
      'Exposição de um inspetor predial e posterior emissão do respectivo laudo técnico',
  },
];

export default function Skills() {
  return (
    <Container>
      <section
        id="skills"
        className="section-white"
        // Adiciona um preenchimento na parte inferior para evitar sobreposição do rodapé
        style={{ paddingBottom: '8rem' }}
      >
        <div className="container">
          <h1 className="section-title text-black">
            NOSSOS PRINCIPAIS SERVIÇOS
          </h1>
          <div className="section-container">
            <div id="skills-container" data-aos="fade-up">
              {services.map((service, index) => (
                <div className="skill-card" key={index}>
                  {service.icon}
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <button>Saiba mais</button>
                </div>
              ))}
            </div>

            <p className="section-subtitle , color:'#007bff'">
              Seus Benefícios
            </p>
          </div>{' '}
          <Benefits />
        </div>
      </section>
    </Container>
  );
}
