import { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  src: string;
  controls?: boolean;
  autoplay?: boolean;
  isActive: boolean;
}

function VideoPlayer({
  src,
  controls = false,
  autoplay = false,
  isActive,
}: VideoPlayerProps) {
  const videoNode = useRef<HTMLVideoElement>(null);
  const player = useRef<ReturnType<typeof videojs> | null>(null);

  useEffect(() => {
    if (isActive && videoNode.current && src) {
      console.log('Inicializando o player...');

      if (player.current) {
        player.current.dispose(); // Destruir o player anterior, se existir
      }

      player.current = videojs(videoNode.current, {
        controls,
        autoplay,
        muted: true, // Necessário para autoplay em alguns navegadores
        sources: [
          {
            src,
            type: 'video/mp4',
          },
        ],
      });

      player.current.on('error', () => {
        console.error('Erro ao carregar o vídeo.');
      });

      player.current.ready(() => {
        console.log('Player pronto');
      });
    }

    return () => {
      if (player.current) {
        console.log('Destruindo o player');
        player.current.dispose();
      }
    };
  }, [src, controls, autoplay, isActive]);

  return (
    <div data-vjs-player style={{ width: '100%', height: '100%' }}>
      <video
        ref={videoNode}
        className="video-js vjs-default-skin"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
}

export default VideoPlayer;
