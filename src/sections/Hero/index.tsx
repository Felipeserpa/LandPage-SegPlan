import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaWhatsapp } from 'react-icons/fa';
import Container from './styles';
import moovideos from '../../assets/videos/segplantest.mp4';
import styled from 'styled-components';

// Styled-component para o card principal
const MainCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease-out;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    gap: 20px;
  }
`;

// Styled-component para o conteúdo de texto
const TextContent = styled.div`
  flex: 1.2;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

// Styled-component para o título
const Title = styled.h1`
  font-size: 32px;
  color: #131212;
  margin-bottom: 25px;
  line-height: 1.3;
  font-weight: 700;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

// Styled-component para o parágrafo
const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
  opacity: 0.9;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 25px;
  }
`;

// Styled-component para o botão do WhatsApp - AGORA MAIS COMPACTO
const WhatsAppButton = styled.a`
  background-color: #25d366;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
  white-space: nowrap; /* Impede que o texto quebre em várias linhas */

  /* Define um tamanho máximo para o botão */
  max-width: 300px;
  justify-content: center;
  width: auto;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
    background-color: #20bd5a;
  }

  @media (max-width: 768px) {
    max-width: 280px;
    padding: 13px 26px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    width: 100%;
    padding: 12px 24px;
    justify-content: center;
  }
`;

// Styled-component para o contêiner do vídeo
const VideoContainer = styled.div`
  flex: 1;
  position: relative;
  min-width: 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  height: 580px;
  max-width: 380px;

  @media (max-width: 768px) {
    height: 350px;
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

// Styled-component para o vídeo
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

// Styled-component para o botão de play/pause
const PlayButton = styled.div<{ $isPlaying: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) =>
    props.$isPlaying ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.7)'};
  color: white;
  border: none;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  display: ${(props) => (props.$isPlaying ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  border: 3px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translate(-50%, -50%) scale(1.1);
    border-color: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

// Opcional: Adicionar indicador de playing
const PlayingIndicator = styled.div<{ $isPlaying: boolean }>`
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  display: ${(props) => (props.$isPlaying ? 'flex' : 'none')};
  align-items: center;
  gap: 5px;
  z-index: 10;
`;

export default function Presentation() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  return (
    <Container
      id="inicio"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 5%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <MainCard>
        {/* Conteúdo de texto à esquerda */}
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
            <FaWhatsapp style={{ fontSize: '18px' }} />
          </WhatsAppButton>
        </TextContent>

        {/* Vídeo à direita */}
      </MainCard>
    </Container>
  );
}
