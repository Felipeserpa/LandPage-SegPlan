import Loading from '../../components/Loading';
import Container from './styles';
//import ReactPlayer from 'react-player';
export default function About() {
  return (
    <Container>
      <section id="about" className="section-blue">
        <div className="container">
          <h1 className="section-title text-white">Sobre Nós</h1>
          <div className="section-container">
            <article>
              <p>Olá,Somos a MOOVE +</p>
              <p>
                Somos uma empresa dedicada ao transporte seguro e confortável
                para idosos, oferecendo um atendimento humanizado e acolhedor.
                Nosso objetivo é proporcionar mobilidade com respeito e carinho,
                garantindo que cada trajeto seja uma experiência tranquila e
                digna.
              </p>
              <p>Nossos diferenciais</p>
              <ul>
                <li>Transporte exclusivo</li>
                <li>Motoristas experientes e atenciosos</li>
                <li>Conforto</li>
                <li>Preços acessíveis</li>
              </ul>
              <p>
                Agende sua próxima viagem conosco e experimente a diferença!
              </p>
            </article>

            <div className="container-logo">
              <picture data-aos="fade-up ">
                /<img src="/logo.png" alt="avatar.webp" />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
