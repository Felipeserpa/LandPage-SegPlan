import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import Container from './styles';

export default function Footer() {
  return (
    <Container>
      <footer className="container section-blue">
        <div className="section-container">
          <p>Desenvolvido por @SerpaSoluçõesTecnologicas</p>

          <div className="social-links">
            <a
              style={{ color: 'white' }}
              href="https://wa.me/message/VOG6YD5POXPPG1"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              style={{ color: 'white' }}
              href="https://www.instagram.com/serpa_solucoes_em_tecnologia/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
}
