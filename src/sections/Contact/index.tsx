import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Container from './styles';
import Form from '../../components/Form';

export default function Contact() {
  return (
    <Container>
      <section id="contact" className="section-grey">
        <div className="container">
          <h1 className="section-title text-blue">Contato</h1>
          <h3>Me envie uma mensagem que retornarei em breve!</h3>
          <Form />
        </div>
      </section>
    </Container>
  );
}
