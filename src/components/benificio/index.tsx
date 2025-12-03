import React from 'react';
import styled from 'styled-components';
import segplan0 from './../../assets/images/galeria/segplan0.jpg';
import segplan1 from './../../assets/images/galeria/segplan01.jpg';
import segplan2 from './../../assets/images/galeria/segplan02.jpg';
import segplan3 from './../../assets/images/galeria/segplan03.jpg';
import segplan4 from './../../assets/images/galeria/segplan04.jpg';
import segplan5 from './../../assets/images/galeria/segplan05.jpg';
import segplan6 from './../../assets/images/galeria/segplan006.jpg';
import segplan8 from './../../assets/images/galeria/segplan07.jpg';
import segplan9 from './../../assets/images/galeria/segplan08.jpg';
import segplan10 from './../../assets/images/galeria/segplan09.jpg';

// Dados de Exemplo para a Galeria de Fotos
// Aumentado para 10 itens para criar a grade 5x2
const portfolioItems = [
  {
    id: 1,
    src: segplan0,
    alt: 'Inspeção Predial em Fachada',
    category: 'Inspeção',
  },
  {
    id: 2,
    src: segplan1,
    alt: 'Laudo de Vistoria de Vizinhança',
    category: 'Vizinhança',
  },
  {
    id: 3,
    src: segplan2,
    alt: 'Perícia de Patologia em Concreto',
    category: 'Perícia',
  },
  {
    id: 4,
    src: segplan3,
    alt: 'Laudo de Estabilidade Estrutural',
    category: 'Estrutural',
  },
  {
    id: 5,
    src: segplan4,
    alt: 'Termografia em Instalações',
    category: 'Ensaios',
  },
  // Novos itens adicionados para completar as 10 fotos
  {
    id: 6,
    src: segplan5,
    alt: 'Vistoria de Recebimento de Obra',
    category: 'Vistoria',
  },
  {
    id: 7,
    src: segplan6,
    alt: 'Inspeção de Telhado',
    category: 'Inspeção',
  },
  {
    id: 8,
    src: segplan10,
    alt: 'Laudo de Patologia em Pintura',
    category: 'Perícia',
  },
  {
    id: 9,
    src: segplan8,
    alt: 'Acompanhamento de Fundação',
    category: 'Estrutural',
  },
  {
    id: 10,
    src: segplan9,

    category: 'escritório',
  },
];

export default function PortfolioSection() {
  return (
    <Container id="portfolio">
      <div className="container">
        <h2 className="section-title">Galeria de Vistorias e Laudos</h2>
        <p className="section-subtitle">
          A precisão e a qualidade do nosso trabalho em imagens. Veja alguns de
          nossos projetos concluídos.
        </p>

        <GalleryGrid>
          {portfolioItems.map((item) => (
            <GalleryItem key={item.id}>
              <img src={item.src} alt={item.alt} />
              <div className="overlay">
                <span className="category-tag">{item.category}</span>
                <p className="description">{item.alt}</p>
              </div>
            </GalleryItem>
          ))}
        </GalleryGrid>

        <div className="cta-contact-wrapper">
          <a href="#contact" className="cta-contact-button">
            Solicite Seu Orçamento Agora
          </a>
        </div>
      </div>
    </Container>
  );
}

// -------------------------------------------------------------
// STYLED-COMPONENTS (CSS)
// -------------------------------------------------------------

const Container = styled.div`
  padding: 9px 20px;
  text-align: center;
  background-color: #f7f7f7; /* Fundo claro para destacar a galeria */

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

    font-weight: 500;
    //deixar responsivo
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  .category-tag {
  }

  /* Estilos para o botão de contato no final da galeria */
  .cta-contact-wrapper {
    text-align: center;
    margin-top: 40px;
  }

  .cta-contact-button {
    display: inline-block;
    padding: 15px 35px;
    background-color: #10c058; /* Cor principal de destaque */
    color: white;
    text-decoration: none;
    font-weight: 700;
    border-radius: 8px;
    transition: background-color 0.3s, transform 0.1s;
    box-shadow: 0 6px 15px rgba(16, 192, 88, 0.4);
    font-size: 1.1rem;

    &:hover {
      background-color: #0c9b46;
      transform: translateY(-2px);
    }
  }
`;

// Estilos do Grid e Itens da Galeria
const GalleryGrid = styled.div`
  display: grid;
  /* ALTERADO: Forçando 5 colunas para layout 5x2 em desktop. */
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  @media (max-width: 1280px) {
    /* Em telas grandes (laptops), usa 4 colunas */
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    /* Em telas médias (tablet), usa 3 colunas */
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    /* Em tablets menores, usa 2 colunas */
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 500px) {
    /* Em telas muito pequenas (mobile), usa 1 coluna para melhor visualização */
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  /* Garante que a imagem preencha o container */
  img {
    width: 100%;
    /* Reduzindo a altura fixa para caber 5 colunas lado a lado */
    height: 250px;
    object-fit: cover; /* Recorta a imagem para preencher */
    display: block;
    transition: transform 0.4s ease-in-out;
  }

  /* Efeito de zoom na imagem ao passar o mouse */
  &:hover img {
    transform: scale(1.05);
  }

  /* Overlay para descrição */
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 15px;
    transform: translateY(100%); /* Esconde por padrão */
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  /* Mostra o overlay ao passar o mouse */
  &:hover .overlay {
    transform: translateY(0);
  }

  .category-tag {
    background-color: #10c058;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .description {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
`;
