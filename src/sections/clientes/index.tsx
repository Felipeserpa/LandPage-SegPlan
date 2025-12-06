import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';
import segplan from '../../assets/videos/segplan2.mp4';
import img from '../../assets/images/imgdep.png';
// Dados de Exemplo: Substitua os dados e os links pelos seus
const testimonialsData = [
  {
    type: 'embed',
    videoUrl: segplan,
    // Substitua pelo link embed do YouTube/Vimeo
    description:
      'A Segplan Laudos entrega segurança, confiança e agilidade na execução de laudos técnicos. Trabalhamos com precisão, responsabilidade e foco total na regularização do seu negócio.',
    author: 'Eng. Ricardo M. - Construtora Alpha',
  },
  {
    type: 'photo',
    photoUrl: img, // Substitua pelo caminho da foto do cliente
    description:
      'Precisávamos dos laudos para AVCB e elétrica do condomínio com urgência, e a Segplan Laudos foi extremamente eficiente. A equipe veio até o local, fez as vistorias com cuidado e entregou o laudo no prazo exato combinado. Toda comunicação foi muito transparente e o suporte pós-entrega foi excepcional. Empresa séria e comprometida com o cliente!',
    author: 'Dra. Juliana S. - Incorporadora Beta',
  },
  {
    type: 'text',
    photoUrl: '/images/client-photo-02.jpg',
    description:
      '"Encontrei a Segplan Laudos por indicação e foi uma das melhores escolhas que fiz para meu negócio. Eles resolveram toda parte técnica e burocrática de forma ágil, sem enrolação e com preço justo. Além disso, me orientaram sobre como manter as normas em dia e evitar problemas futuros.',
    author: 'Sr. Antônio C. - Síndico Condomínio Jardins',
  },
];

// Componente Principal
export default function TestimonialSection() {
  return (
    <Container>
      <div className="container" id="sobre">
        <h2 className="section-title">Confiança Comprovada</h2>
        <p className="section-subtitle">
          O que nossos clientes dizem sobre a qualidade e precisão dos nossos
          laudos e inspeções.
        </p>

        <div className="testimonial-grid">
          {testimonialsData.map((t, index) => (
            <TestimonialCard key={index}>
              {/* Foto ou Vídeo */}
              <div className="media-area">
                {t.type === 'embed' ? (
                  <iframe
                    src={segplan}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Depoimento de ${t.author}`}
                  ></iframe>
                ) : (
                  <div className="photo-placeholder">
                    {/* Placeholder para foto. Use uma foto real do cliente/obra aqui. */}
                    <img
                      src={t.photoUrl}
                      alt={`Foto do cliente ${t.author}`}
                      className="client-photo"
                    />
                  </div>
                )}
              </div>

              {/* Descrição e Autor */}
              <div className="content-area">
                <FaQuoteLeft className="quote-icon" />
                <p className="description">{t.description}</p>
                <p className="author">
                  <strong>{t.author}</strong>
                </p>
              </div>
            </TestimonialCard>
          ))}
        </div>
      </div>
    </Container>
  );
}

// -------------------------------------------------------------
// STYLED-COMPONENTS (CSS)
// -------------------------------------------------------------

const Container = styled.div`
  padding: 80px 20px;
  background-color: #f7f7f7; /* Fundo cinza claro para destacar a seção */

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.2rem;
    font-weight: 800;
    text-align: center;
    color: #333;
    margin-bottom: 10px;
  }

  .section-subtitle {
    font-size: 1.1rem;
    text-align: center;
    color: #666;
    margin-bottom: 40px;
  }

  .testimonial-grid {
    display: grid;
    /* 3 colunas em desktop, 1 ou 2 em mobile */
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
  }
`;

const TestimonialCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  /* Área da Mídia (Foto/Vídeo) */
  .media-area {
    position: relative;
    width: 100%;
    /* Proporção 16:9 para vídeos */
    padding-top: 56.25%;
    height: 0;
  }

  /* Estilo do Iframe (Vídeo) */
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Estilo da Foto */
  .photo-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .client-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Área do Conteúdo (Texto) */
  .content-area {
    padding: 25px;
    text-align: center;
    position: relative;
  }

  .quote-icon {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    color: #10c058;
    font-size: 1.8rem;
  }

  .description {
    font-style: italic;
    color: #555;
    margin-bottom: 15px;
    margin-top: 10px;
    line-height: 1.5;
  }

  .author {
    font-size: 1rem;
    color: #333;
    font-weight: 500;
  }
`;
