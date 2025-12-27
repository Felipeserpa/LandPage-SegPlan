import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { Section, Wrapper, TextBox, SliderBox, ImageSlide } from './styles';

import img1 from '../../assets/images/galeria/segplan08.jpg';
import img2 from '../../assets/images/segpred.jpg';
import img3 from '../../assets/images/galeria/segplan10.jpg';

const images = [img1, img2, img3];

export default function TestimonialSection() {
  return (
    <Section id="sobre">
      <Wrapper>
        <TextBox>
          <h2>Quem somos</h2>

          <p>
            A SegPlan atua há mais de 10 anos no mercado, sendo especializada em
            engenharia diagnóstica. Oferece serviços como laudos de inspeção
            predial, fiscalização de obras, projetos de combate a incêndio,
            avaliação de imóveis e alvarás de funcionamento.
          </p>

          <p>
            Com sede em Recife, a empresa atende todo o estado de Pernambuco,
            prestando serviços com qualidade técnica, segurança e
            confiabilidade, sempre em conformidade com as normas vigentes.
          </p>
        </TextBox>

        <SliderBox>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <ImageSlide src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderBox>
      </Wrapper>
    </Section>
  );
}
