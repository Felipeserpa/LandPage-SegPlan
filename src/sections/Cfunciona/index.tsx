import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ComoFuncionaContainer from './styles';

const passosProcesso = [
  {
    numero: '01',
    titulo: 'Contato & Briefing',
    descricao: 'Você entra em contato e descreve a necessidade do seu imóvel.',
  },
  {
    numero: '02',
    titulo: 'Proposta Técnica',
    descricao: 'Enviamos proposta detalhada com escopo, prazo e investimento.',
  },
  {
    numero: '03',
    titulo: 'Vistoria in loco',
    descricao: 'Nossa equipe realiza a inspeção presencial no imóvel.',
  },
  {
    numero: '04',
    titulo: 'Elaboração do Laudo',
    descricao:
      'Processamos os dados e elaboramos o documento técnico completo.',
  },
  {
    numero: '05',
    titulo: 'Entrega & ART',
    descricao: 'Entregamos o laudo com ART registrada e suporte pós-entrega.',
  },
];

export default function ComoFunciona() {
  return (
    <ComoFuncionaContainer id="como-funciona">
      <div className="conteudo-wrapper">
        {/* CABEÇALHO */}
        <div className="header-secao">
          <div className="tag-como-funciona">Como Funciona</div>
          <h2>
            Do contato ao laudo <br />
            em <span className="text-gradient">5 etapas simples</span>
          </h2>
          <p className="descricao-secao">
            Nosso processo foi desenhado para ser ágil, transparente e sem
            burocracias desnecessárias.
          </p>
        </div>

        {/* ESTEIRA COLETIVA DAS ETAPAS */}
        <div className="fluxo-etapas">
          {passosProcesso.map((passo, index) => (
            <div className="etapa-item" key={index}>
              {/* Indicador Numérico Circular */}
              <div className="numero-circulo">{passo.numero}</div>

              {/* Textos Informativos */}
              <div className="etapa-info">
                <h4>{passo.titulo}</h4>
                <p>{passo.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO DE INTERAÇÃO FINAL */}
        <a href="#contato" className="btn-cta">
          <span>Iniciar meu processo agora</span>
          <FaArrowRight size={13} />
        </a>
      </div>
    </ComoFuncionaContainer>
  );
}
