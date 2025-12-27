import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img from '../../assets/images/galeria/segplan08.jpg';
import img2 from '../../assets/images/segpred.jpg';
import img3 from '../../assets/images/galeria/segplan10.jpg';

// Imagens para o slider (pode adicionar mais imagens aqui)
const sliderImages = [img, img2, img3];

export default function TestimonialSection() {
  return (
    <Container>
      <div className="container" id="sobre">
        <ContentWrapper>
          <TextColumn>
            <h2 className="section-title">Quem somos</h2>
            <p className="description">
              A SegPlan atua há mais de 10 anos no mercado, sendo especializada
              em engenharia diagnóstica. Oferece serviços como laudos de
              inspeção predial, fiscalização de obras, projetos de combate a
              incêndio, avaliação de imóveis e alvarás de funcionamento..
            </p>
            <p className="description">
              Com sede em Recife, a empresa atende todo o estado de Pernambuco,
              prestando serviços com qualidade técnica, segurança e
              confiabilidade, sempre em conformidade com as normas vigentes.
            </p>
          </TextColumn>

          <SliderColumn>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              style={{ width: '100%', height: '100%' }}
            >
              {sliderImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <SlideImage src={src} alt={`Quem somos ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </SliderColumn>
        </ContentWrapper>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

const TextColumn = styled.div`
  flex: 1;

  .section-title {
    font-size: clamp(2.2rem, 5vw, 3rem);
    font-weight: 900;
    color: #000;
    margin-bottom: 25px;
    line-height: 1.2;
  }

  .description {
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    color: #111;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: justify;

    @media (max-width: 960px) {
      text-align: center;
    }
  }
`;

const SliderColumn = styled.div`
  flex: 1;
  width: 100%;
  max-width: 550px;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  background: #fff;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
