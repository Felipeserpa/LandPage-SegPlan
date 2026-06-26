import React from 'react';
import {
  FaSearch,
  FaRegFileAlt,
  FaDollarSign,
  FaCube,
  FaBookOpen,
  FaLightbulb,
  FaArrowRight,
  FaCogs,
} from 'react-icons/fa';
import ServicosContainer from './styles';

const listaServicos = [
  {
    isPrincipal: true,
    icon: <FaSearch size={20} />,
    title: 'Inspeção Predial',
    description:
      'Avaliação técnica completa das condições de conservação, desempenho e manutenção da edificação, conforme ABNT NBR 16747/2020.',
    features: [
      'Inspeção de estrutura, fachadas e vedações',
      'Análise de instalações hidráulicas e elétricas',
      'Classificação de risco e prioridades',
      'Laudo técnico com ART',
      'Plano de Manutenção Preventiva',
    ],
    actionText: 'Contratar fiscalização', // Ajustado conforme fluxo ou dinâmico
    link: '#contato',
  },
  {
    isPrincipal: false,
    icon: <FaRegFileAlt size={20} />,
    title: 'Laudos Técnicos',
    description:
      'Emissão de laudos especializados para diferentes finalidades legais, comerciais e securitárias, com validade técnica e jurídica.',
    features: [
      'Laudo de vistoria para financiamento',
      'Laudo de avaliação mercadológica',
      'Laudo para processos judiciais (perícia)',
      'Termo de Referência Técnica',
      'Relatórios fotográficos detalhados',
    ],
    actionText: 'Solicitar laudo',
    link: '#contato',
  },
  {
    isPrincipal: false,
    icon: <FaDollarSign size={20} />,
    title: 'Avaliação de Imóveis',
    description:
      'Determinação do valor de mercado de imóveis residenciais e comerciais, para compra, venda, inventário, seguro ou garantia bancária.',
    features: [
      'Avaliação pelo método comparativo direto',
      'Avaliação evolutiva (custo de reprodução)',
      'Laudo de avaliação conforme NBR 14653',
      'Destinado a inventário, herança, compra e venda',
    ],
    actionText: 'Solicitar avaliação',
    link: '#contato',
  },
  {
    isPrincipal: false,
    icon: <FaCube size={20} />,
    title: 'Fiscalização de Obras',
    description:
      'Acompanhamento técnico de obras para garantir o cumprimento do projeto, normas técnicas, prazos e qualidade dos serviços executados.',
    features: [
      'Controle de execução e qualidade',
      'Verificação de materiais e serviços',
      'Relatórios periódicos de evolução',
      'Medições e controle financeiro',
    ],
    actionText: 'Contratar fiscalização',
    link: '#contato',
  },
];

export default function Servicos() {
  return (
    <ServicosContainer id="servicos">
      {/* BACKGROUND BLUEPRINT COBRINDO TODA A SEÇÃO */}
      <div className="bg-blueprint" />

      <div className="conteudo-wrapper">
        {/* CABEÇALHO */}
        <div className="header-secao">
          <div className="tag-o-que-fazemos">O que fazemos</div>
          <h2>
            Soluções em{' '}
            <span className="text-gradient">engenharia diagnóstica</span> para
            cada necessidade
          </h2>
          <p className="descricao-secao">
            Do diagnóstico técnico à entrega do laudo, cobrimos toda a cadeia de
            serviços que protege seu imóvel.
          </p>
        </div>

        {/* GRID PRINCIPAL DE SERVIÇOS MAPPED */}
        <div className="servicos-grid">
          {listaServicos.map((servico, index) => (
            <div
              key={index}
              className={`servico-card ${
                servico.isPrincipal ? 'has-badge' : ''
              }`}
            >
              {/* Renderiza Tag "PRINCIPAL" caso o booleano seja verdadeiro */}
              {servico.isPrincipal && (
                <span className="tag-principal">Principal</span>
              )}

              {/* Caixa do Ícone */}
              <div className="icon-box">{servico.icon}</div>

              <h3>{servico.title}</h3>
              <p className="descricao-card">{servico.description}</p>

              {/* Lista interna de features do serviço */}
              <ul className="itens-list">
                {servico.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              {/* Link de Chamada de Ação inferior */}
              <a href={servico.link} className="action-link">
                {servico.actionText}
                <FaArrowRight size={11} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </ServicosContainer>
  );
}
