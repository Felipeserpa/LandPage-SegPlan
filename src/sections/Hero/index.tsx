import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Container from './styles';
import styled from 'styled-components';

// 1. IMPORTANTE: Importar a imagem para o React reconhecer o caminho
import backgroundImage from '../../assets/images/segpred.jpg';

const MainCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;

  /* --- MUDANÇAS PARA TRANSPARÊNCIA --- */
  background: none;
  border: none;
  box-shadow: none;

  border-radius: 15px;
  padding: 60px;
  //box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3); /* Sombra um pouco mais forte para destacar o vidro */
  animation: fadeInUp 1s ease-out;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;
const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os itens internamente */
  width: 100%;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #ffffff; /* Mudado para branco */
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3); /* Sombra no texto para ler melhor */
  margin-bottom: 25px;
  line-height: 1.2;
  font-weight: 800;

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;
const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #f1f1f1; /* Branco levemente acinzentado */
  margin-bottom: 35px;
  max-width: 600px;
  font-weight: 500;
`;

const WhatsAppButton = styled.a`
  background-color: #25d366;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);

  &:hover {
    transform: translateY(-3px);
    background-color: #20bd5a;
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
        minHeight: '160vh', // Seção um pouco mais baixa
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 5%',
        backgroundColor: '#e9e8e8', // Cor de fundo caso a imagem seja menor
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: '100%', // Diminui o tamanho da imagem pela metade
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <MainCard>
        <TextContent>
          <Title>Engenharia Diagnóstica com Precisão e Credibilidade</Title>
          <Paragraph>
            Inspeção Predial, Fiscalização de Obras e Laudos Técnicos realizados
            por engenheiros especializados. Garantimos qualidade e segurança em
            cada projeto.
          </Paragraph>
          <WhatsAppButton
            href="https://wa.me/5581989282737?text=Olá,%20tenho%20interesse%20no%20serviço!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
            <FaWhatsapp style={{ fontSize: '20px' }} />
          </WhatsAppButton>
        </TextContent>
      </MainCard>
    </Container>
  );
}
