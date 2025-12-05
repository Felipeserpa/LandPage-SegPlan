import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaWhatsapp } from 'react-icons/fa';
import Container from './styles';
import moovideos from '../../assets/videos/segplan.mp4';
import styled from 'styled-components'; // Import styled-components

// Styled-component for the main content box
const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  background-color: rgba(255, 255, 255, 0.9);
  background-image: url(/assets/images/Chat.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-blend-mode: luminosity;
  border-radius: 10px;
  padding: 50px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease-out;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    padding: 30px; /* Adjust padding */
  }

  @media (max-width: 480px) {
    padding: 20px; /* Further adjust padding for mobile */
  }
`;

// Styled-component for the text content div
const StyledTextContent = styled.div`
  width: 45%;
  text-align: left;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    text-align: center; /* Center text on smaller screens */
    padding: 10px 0; /* Adjust padding */
  }
`;

// Styled-component for the H1
const StyledH1 = styled.h1`
  font-size: 34px;
  color: #131212;
  margin-bottom: 30px;
  /* O paddingRight original '20px 20px' era inválido. Foi removido.
     Se for necessário um padding-right específico, defina-o aqui com um único valor. */

  @media (max-width: 768px) {
    font-size: 28px; /* Ajusta para tablets */
    padding-right: 0; /* Garante que não haja padding extra em telas menores */
  }

  @media (max-width: 480px) {
    font-size: 24px; /* Ajusta para celulares */
    text-align: center; /* Centraliza o texto em telas muito pequenas para melhor legibilidade */
  }
`;

// Styled-component for the paragraph
const StyledP = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #007;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

// Styled-component for the CTA button
const StyledCtaButton = styled.button`
  background-color: #017410;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px 15px;
    justify-content: center; /* Centraliza o conteúdo do botão */
    width: 100%; /* Botão de largura total no celular */
  }
`;

// Styled-component for the video container
const StyledVideoContainer = styled.div`
  width: 45%;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%; /* Largura total em telas menores */
    margin-top: 30px; /* Adiciona espaço entre texto e vídeo */
  }
`;

// Styled-component for the video element itself
const StyledVideo = styled.video`
  width: 100%; /* Corrigido de 200% para 100% para evitar overflow */
  max-width: 100%;
  height: auto;
  max-height: 420px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media (max-width: 768px) {
    max-height: 300px; /* Ajusta a altura máxima para telas menores */
  }

  @media (max-width: 480px) {
    max-height: 200px; /* Ajusta ainda mais a altura máxima para celular */
  }
`;

// Styled-component for the play button overlay
const StyledPlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Presentation() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playButtonRef = useRef<HTMLDivElement | null>(null); // Ref para o div do botão

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;

        if (playButtonRef.current) {
          // Verifica se playButtonRef.current existe
          playButtonRef.current.style.display = 'flex';
        }
      } else {
        videoRef.current.play();
        videoRef.current.muted = false;
        if (playButtonRef.current) {
          // Verifica se playButtonRef.current existe
          playButtonRef.current.style.display = 'none';
        }
      }
      setIsPlaying(!isPlaying);
    }
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
      {/* Box branco com texto e vídeo */}
      <StyledBox className="box">
        {/* Texto à esquerda */}
        <StyledTextContent id="inicio">
          <StyledH1>
            Engenharia Diagnóstica com Precisão e Credibilidade
          </StyledH1>
          <StyledP>
            Inspeção Predial,Fiscalização de Obras e Laudos Técnicos realizados
            por engenheiros especializados.
          </StyledP>
          <a href="https://wa.me/message/VOG6YD5POXPPG1" className="cta">
            <StyledCtaButton type="button">
              Agende um horário conosco{' '}
              <FaWhatsapp style={{ fontSize: '22px' }} />
            </StyledCtaButton>
          </a>
        </StyledTextContent>

        {/* Vídeo à direita */}
        <StyledVideoContainer className="video-container">
          <StyledVideo ref={videoRef} src={moovideos} />
          <StyledPlayButton ref={playButtonRef} onClick={handlePlayPause}>
            {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
          </StyledPlayButton>
        </StyledVideoContainer>
      </StyledBox>

      {/* Estatísticas mais abaixo */}
    </Container>
  );
}
