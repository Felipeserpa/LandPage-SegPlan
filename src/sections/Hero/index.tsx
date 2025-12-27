import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Container from './styles';
import styled from 'styled-components';
import backgroundImage from '../../assets/images/segpred.jpg';

const MainCard = styled.div`
  display: flex;
  flex-direction: column; /* Coloca um abaixo do outro */
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center;
  width: 100%;
  max-width: 800px; /* Largura máxima para não esticar demais o form */
  gap: 40px;
  animation: fadeInUp 1s ease-out;
  text-align: center; /* Centraliza o texto */
`;

const TextContent = styled.div`
  padding-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 42px;
  color: #ffffff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  line-height: 1.2;
  font-weight: 800;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 10px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  max-width: 650px;
`;

const FormColumn = styled.div`
  width: 100%;
  max-width: 600px; /* Aumente este valor (ex: 600px, 700px) para alargar o card */
  /* EFEITO VIDRO TRANSPARENTE */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(15px);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);

  @media (max-width: 480px) {
    padding: 25px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input,
  textarea {
    width: 100%;
    padding: 14px;
    background: rgba(155, 153, 153, 0.9);
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    color: #333;

    &::placeholder {
      color: #ffffff;
      opacity: 1;
    }

    &:focus {
      outline: 2px solid #25d366;
    }
  }

  textarea {
    height: 100px;
    resize: none;
  }
`;

const WhatsAppSubmitLink = styled.a`
  width: 100%;
  background-color: #25d366;
  color: #fff;
  padding: 16px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  display: flex; /* Para alinhar ícone e texto */
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);

  &:hover {
    background-color: #1eb954;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
  }
`;
export default function Presentation() {
  return (
    <Container
      id="inicio"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 5%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <MainCard>
        <TextContent>
          <Title>Engenharia Diagnóstica com Precisão e Credibilidade</Title>
          <Paragraph>
            Inspeção Predial, Fiscalização de Obras e Laudos Técnicos realizados
            por engenheiros especializados.
          </Paragraph>
        </TextContent>

        <FormColumn>
          <ContactForm action="#" method="POST">
            <h3 style={{ color: '#fff', marginBottom: '20px' }}>
              Entre em contato e solicite um orçamento
            </h3>
            <input type="text" placeholder="Seu Nome Completo " required />
            <input type="email" placeholder="Seu E-mail" required />
            <input type="tel" placeholder="WhatsApp (DDD + Número)" required />
            <textarea placeholder="Serviço que está buscando?" required />
            <WhatsAppSubmitLink
              href="https://wa.me/5581989282737?text=Olá! Vim pelo site e gostaria de um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'conversion', {
                    send_to: 'AW-17835851857/xDiyCJ_ildgbENGA5rhC',
                    value: 1.0,
                    currency: 'BRL',
                  });
                }
              }}
            >
              Fale Conosco agora
              <FaWhatsapp size={24} />
            </WhatsAppSubmitLink>
          </ContactForm>
        </FormColumn>
      </MainCard>
    </Container>
  );
}
