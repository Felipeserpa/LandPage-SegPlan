import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import Container from './styles';

export default function Footer() {
  return (
    <Container>
      <footer className="container section-blue">
        <div className="section-container">
          <p>Desenvolvido por @Stechnology</p>

          <div className="social-links">
            <a
              href="https://wa.me/message/VOG6YD5POXPPG1"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="l" target="_blank" rel="noreferrer">
              <FaInstagramSquare />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
}
