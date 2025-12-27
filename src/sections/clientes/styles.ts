import styled from 'styled-components';

/* =======================
   SECTION (COMPENSA HEADER)
======================= */
export const Section = styled.section`
  width: 100%;
  padding: 100px 16px 60px; /* 👈 espaço real para header */
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 120px 14px 50px;
  }
`;

/* =======================
   WRAPPER CENTRAL
======================= */
export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 26px;
  }
`;

/* =======================
   TEXTO (LEGÍVEL DE VERDADE)
======================= */
export const TextBox = styled.div`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 14px;
    line-height: 1.25;
    text-align: center;
    color: #000;
  }

  p {
    font-size: 1rem; /* 👈 NÃO MICRO */
    line-height: 1.55;
    margin-bottom: 12px;
    color: #222;
    text-align: center;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.35rem;
    }

    p {
      font-size: 0.95rem; /* 👈 limite mínimo saudável */
      line-height: 1.5;
    }
  }
`;

/* =======================
   SLIDER (MENOR NO MOBILE)
======================= */
export const SliderBox = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;

  border-radius: 12px;
  overflow: hidden;

  aspect-ratio: 4 / 3;

  .swiper,
  .swiper-wrapper,
  .swiper-slide {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    aspect-ratio: 16 / 9;
  }

  @media (max-width: 480px) {
    aspect-ratio: 18 / 9; /* 👈 mais baixo, igual print */
  }
`;

/* =======================
   IMAGEM DO SLIDE
======================= */
export const ImageSlide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
