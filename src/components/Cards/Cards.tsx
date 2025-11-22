import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useState, useRef } from 'react';

import mooves from '../../assets/videos/moove.mp4';
import type { Swiper as SwiperCore } from 'swiper'; // Importe o tipo SwiperCore
import type { SwiperRef } from 'swiper/react'; // Importe o tipo SwiperRef

export default function Cards() {
  const swiperRef = useRef<SwiperRef | null>(null); // Use SwiperRef para tipar a referência
  const [activeSlide, setActiveSlide] = useState(0); // Estado para controlar o slide ativo

  const [telaCheia, setTelaCheia] = useState<{
    url: string | null;
    isVideo: boolean;
  }>({ url: null, isVideo: false });

  const toggleTelaCheia = (url: string | null, isVideo = false) => {
    setTelaCheia(
      telaCheia.url === url ? { url: null, isVideo: false } : { url, isVideo }
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        ref={swiperRef} // Agora o tipo da ref é compatível
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={35}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          1024: { slidesPerView: 3 }, // 3 imagens em telas grandes
          768: { slidesPerView: 2 }, // 2 imagens em tablets
          480: { slidesPerView: 1 }, // 1 imagem em telas pequenas
        }}
        onSlideChange={(swiper: SwiperCore) =>
          setActiveSlide(swiper.activeIndex)
        }
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            src={''}
            alt="moove transporte"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia('')}
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img
            src={''}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia('')}
          />
        </SwiperSlide>

        {/* Slide 3 (Vídeo) */}

        {/* Slide 4 */}
        <SwiperSlide>
          <img
            src={''}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia('')}
          />
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <img
            src={''}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia('')}
          />
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <img
            src={''}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia('')}
          />
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide>
          <img
            src={''}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia('')}
          />
        </SwiperSlide>

        {/* Slide 8 */}
        <SwiperSlide>
          <img
            src={''}
            alt="moove transportes"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            onClick={() => toggleTelaCheia('')}
          />
        </SwiperSlide>
      </Swiper>

      {/* Modal para tela cheia */}
      {telaCheia.url && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => toggleTelaCheia(null)}
        >
          {telaCheia.isVideo ? (
            <video
              src={telaCheia.url}
              controls
              autoPlay
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                width: 'auto', // Mantém a proporção do vídeo
                height: 'auto', // Mantém a proporção do vídeo
              }}
            />
          ) : (
            <img
              src={telaCheia.url}
              alt="Fullscreen"
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                width: 'auto', // Mantém a proporção da imagem
                height: 'auto', // Mantém a proporção da imagem
                objectFit: 'contain', // Garante que a imagem inteira seja visível
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
