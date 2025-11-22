import { FaHospital, FaNotesMedical, FaClinicMedical } from 'react-icons/fa';

import { IoBarbellOutline } from 'react-icons/io5';
import { IoIosAdd } from 'react-icons/io';
import { BsDropletFill, BsCart4, BsBuilding } from 'react-icons/bs';

import Container from './styles';

export default function Skills() {
  return (
    <Container>
      <section id="skills" className="section-blue">
        <div className="container">
          <h1 className="section-title text-white">SERVIÇOS</h1>
          <div className="section-container">
            <div className="section-article">
              <p
                style={{
                  width: '100%',
                  fontSize: '2rem',
                }}
              >
                Nosso serviço de transporte é pensado para aqueles que precisam
                de um deslocamento seguro e confortável. Oferecemos veículos
                modernos e motoristas experientes para sua total tranquilidade.
                Conte com nossa pontualidade e compromisso para chegar ao seu
                destino com segurança.
              </p>
            </div>
            <p
              style={{
                textAlign: 'center',
                padding: '20px',
                width: '100%',
                fontSize: '25px',
              }}
            >
              Alguns dos lugares aonde podemos levá-lo:
            </p>
            <div id="skills-container" data-aos="fade-up">
              <div className="skill-card">
                <h2>Hospitais</h2>
                <FaHospital className="icon" />
              </div>
              <div className="skill-card">
                <h2>Academias</h2>
                <IoBarbellOutline className="icon" />
              </div>

              <div className="skill-card">
                <h2>Centro Dialise</h2>
                <BsDropletFill className="icon" />
              </div>

              <div className="skill-card">
                <h2>Fisioterapias</h2>
                <FaNotesMedical className="icon" />
              </div>

              <div className="skill-card">
                <h2>Centros de saúde</h2>
                <FaClinicMedical className="icon" />
              </div>
              <div className="skill-card">
                <h2>Eventos Sociais</h2>
                <BsBuilding className="icon" />
              </div>

              <div className="skill-card">
                <h2>compras</h2>
                <BsCart4 className="icon" />
              </div>
              <div className="skill-card">
                <h2>E muito mais...</h2>
                <IoIosAdd className="icon" />
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
              Nossos diferenciais:
            </p>
            <p
              style={{
                textAlign: 'center',
                padding: '20px',
                width: '100%',
                fontSize: '20px',
              }}
            >
              Veiculo confortável e seguro Atendimento humanizado e atencioso
              Segurança e tranquilidade em cada trajeto.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
