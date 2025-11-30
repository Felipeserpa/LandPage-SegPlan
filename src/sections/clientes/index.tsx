// src/components/FAQSection/FAQSection.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Container from './styles';
import { FAQItemContainer } from './styles';
// Dados de Exemplo para a FAQ
const faqData = [
  {
    question: 'O que é um Laudo de Vistoria de Vizinhança?',
    answer:
      'É um documento técnico que registra o estado de conservação dos imóveis vizinhos antes do início de uma obra. Ele é essencial para evitar litígios e determinar responsabilidades em caso de danos futuros.',
  },
  {
    question: 'Qual a diferença entre Laudo Técnico e Inspeção Predial?',
    answer:
      'A Inspeção Predial é uma análise ampla do estado geral da edificação, focando em segurança e funcionalidade. O Laudo Técnico é um documento específico, que pode ser gerado após uma inspeção, para atestar a condição de um único item (como umidade, rachaduras, ou patologias específicas).',
  },
  {
    question: 'Quanto custa um serviço de Inspeção ou Laudo?',
    answer:
      'O valor é determinado por diversos fatores, como o tamanho do imóvel, a complexidade do projeto e o tipo de laudo necessário. Para obter um orçamento preciso e sem compromisso, por favor, entre em contato conosco através do nosso formulário ou WhatsApp.',
  },
  {
    question: 'Em quanto tempo o laudo é entregue?',
    answer:
      'Após a realização da vistoria técnica no local, o prazo médio para entrega do laudo completo e assinado é de 5 a 10 dias úteis, dependendo da complexidade do trabalho de campo e da necessidade de ensaios laboratoriais.',
  },
];

// Componente individual do item do Acordeão
const AccordionItem = ({ item, isOpen, onClick }) => {
  const Icon = isOpen ? FaChevronUp : FaChevronDown;
  return (
    <FAQItemContainer>
      <div className="faq-question" onClick={onClick}>
        <h4>{item.question}</h4>
        <Icon className="toggle-icon" />
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{item.answer}</p>
      </div>
    </FAQItemContainer>
  );
};

// Componente Principal
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null); // Estado para controlar qual item está aberto

  const handleToggle = (index) => {
    // Se o item clicado já estiver aberto, feche. Senão, abra o item clicado.
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <Container>
      <div className="container">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <div className="accordion-wrapper">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={index === openIndex}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

// O Styled-Components será definido na seção 2.
