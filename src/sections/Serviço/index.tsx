import { FaHospital, FaNotesMedical, FaClinicMedical } from 'react-icons/fa';

import { IoBarbellOutline } from 'react-icons/io5';
import { IoIosAdd } from 'react-icons/io';
import { BsDropletFill, BsCart4, BsBuilding } from 'react-icons/bs';

import Container from './styles';

export default function Skills() {
  return (
    <Container>
      <section id="skills" className="section-white">
        <div className="container">
          <h1 className="section-title text-black">
            {' '}
            NOSSOS PRINCIPAIS SERVIÇOS
          </h1>
          <div className="section-container">
            <div id="skills-container" data-aos="fade-up">
              <div className="skill-card">
                <FaHospital className="icon" />
                <h2>Inspeção Predial</h2>
                <p>
                  {' '}
                  Análise minuciosa da edificação para garantir segurança e
                  conformidade com as normas
                </p>
                <button>saiba mais</button>
              </div>

              <div className="skill-card">
                <IoBarbellOutline className="icon" />
                <h2>Fiscalização de Obras</h2>
                <p>
                  Acompanhamento rigoroso de sua obra para assegurar a qualidade
                  e o cumprimento de prazos
                </p>
                <button>saiba mais</button>
              </div>

              <div className="skill-card">
                <BsDropletFill className="icon" />
                <h2>Laudos Técnicos</h2>
                <p>
                  {' '}
                  Exposição de um inspetor predial e posterior emisão do
                  respectivo laudo técnico
                </p>
                <button>saiba mais</button>
              </div>
            </div>

            <p
              style={{
                textAlign: 'center',
                padding: '20px',
                width: '100%',
                fontSize: '25px',
              }}
            >
              Seus Beneficios
            </p>
            <p
              style={{
                textAlign: 'center',
                padding: '20px',
                width: '100%',
                fontSize: '20px',
              }}
            ></p>
          </div>
        </div>
      </section>
    </Container>
  );
}
