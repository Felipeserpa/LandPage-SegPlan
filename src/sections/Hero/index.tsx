import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaWhatsapp } from 'react-icons/fa';
import Container from './styles';
import moovideos from '../../assets/videos/segplan.mp4';
import logoWatermark from '../../assets/images/Chat.png';

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
        padding: '5%',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Box branco com texto e vídeo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1100px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',

          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundBlendMode: 'luminosity',
          borderRadius: '10px',
          padding: '50px',
          boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
          animation: 'fadeInUp 1s ease-out',
        }}
        className="box"
      >
        {/* Texto à esquerda */}
        <div
          style={{
            width: '45%',
            textAlign: 'left',
            padding: '20px',
          }}
          id="inicio"
        >
          <h1
            style={{ fontSize: '34px', color: '#131212', marginBottom: '20px' }}
          >
            Engenharia Diagnóstica com Precisão e Credibilidade
          </h1>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.5',
              color: '#007',
              marginBottom: '20px',
            }}
          >
            Inspeção Predial,Fiscalização de Obras e Laudos Técnicos realizados
            por engenheiros especializados.
          </p>
          <a href="https://wa.me/message/VOG6YD5POXPPG1" className="cta">
            <button
              type="button"
              style={{
                backgroundColor: '#017410',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                fontSize: '18px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
              }}
            >
              Agende um horário conosco{' '}
              <FaWhatsapp style={{ fontSize: '22px' }} />
            </button>
          </a>
        </div>

        {/* Vídeo à direita */}
        <div
          className="video-container"
          style={{
            width: '45%',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <video
            ref={videoRef}
            src={moovideos}
            style={{
              width: '200%',
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '420px',
              borderRadius: '10px',
              boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
              cursor: 'pointer',
            }}
          />
          <div
            ref={playButtonRef}
            onClick={handlePlayPause}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
          </div>
        </div>
      </div>

      {/* Estatísticas mais abaixo */}
    </Container>
  );
}
