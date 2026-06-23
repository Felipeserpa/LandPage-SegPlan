import React, { useState } from 'react';
import FaqContainer from './styles';

const faqData = [
  {
    pergunta: 'O que é Inspeção Predial e quando é obrigatória?',
    resposta:
      'A Inspeção Predial é uma análise técnica feita para avaliar as condições de conservação, segurança e manutenção de um imóvel. Ela é altamente recomendada de forma periódica e pode se tornar obrigatória por leis municipais ou exigências de seguradoras para renovação de apólices condominiais corporativas.',
  },
  {
    pergunta: 'Qual o prazo para entrega do laudo?',
    resposta:
      'Nosso prazo padrão de entrega é de até 7 dias úteis após a realização da vistoria presencial em loco. Esse tempo garante que todos os dados coletados sejam processados com o rigor analítico necessário.',
  },
  {
    pergunta: 'O laudo da SEGPLAN tem validade jurídica?',
    resposta:
      'Sim. Todos os nossos laudos são emitidos por engenheiros habilitados, acompanhados da respectiva ART (Anotação de Responsabilidade Técnica) registrada no CREA, possuindo total validade jurídica perante tribunais, órgãos públicos e bancos.',
  },
  {
    pergunta: 'Vocês atendem em toda a Região Metropolitana do Recife?',
    resposta:
      'Sim, prestamos atendimento completo em Recife, Olinda, Jaboatão dos Guararapes, São Lourenço da Mata e demais municípios da Região Metropolitana, além de projetos sob demanda para todo o estado.',
  },
  {
    pergunta: 'Como funciona a Avaliação de Imóvel para venda ou inventário?',
    resposta:
      'Utilizamos métodos científicos baseados na NBR 14653, principalmente o método comparativo de mercado. Analisamos amostras de imóveis semelhantes na região para apurar com precisão técnica o valor real de mercado do ativo.',
  },
  {
    pergunta: 'Posso contratar a SEGPLAN para fiscalizar minha reforma?',
    resposta:
      'Com certeza. Nossa equipe atua na fiscalização de obras particulares e comerciais garantindo que a execução siga fielmente os projetos técnicos, evitando desperdício de insumos e patologias futuras.',
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    // Se clicar no que já está aberto, fecha. Se não, abre o selecionado.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FaqContainer id="faq">
      <div className="conteudo-wrapper">
        {/* COLUNA ESQUERDA: IDENTIFICAÇÃO INSTITUCIONAL */}
        <div className="coluna-esquerda">
          <div className="tag-perguntas">Perguntas Frequentes</div>
          <h2>
            Dúvidas <br />
            <span className="text-gradient">comuns</span>
          </h2>
          <p className="suporte-texto">
            Não encontrou sua resposta? Nos chame no WhatsApp.
          </p>
          <a
            href="https://wa.me/5581999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-perguntar"
          >
            Perguntar agora
          </a>
        </div>

        {/* COLUNA DIREITA: ACCORDION LIST */}
        <div className="accordion-box">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.pergunta}</span>
                <div className="icon-toggle">
                  {activeIndex === index ? '−' : '+'}
                </div>
              </button>

              <div className="accordion-body">
                <div className="accordion-content">{item.resposta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FaqContainer>
  );
}
