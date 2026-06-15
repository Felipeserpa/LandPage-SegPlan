import React from 'react';
import { FaShieldAlt, FaRegFileAlt, FaRegEye, FaUsers } from 'react-icons/fa';
import QuemSomosContainer from './styles';

export default function QuemSomos() {
  return (
    <QuemSomosContainer id="quem-somos">
      <div className="conteudo-wrapper">
        {/* LADO ESQUERDO: CARD INSTITUCIONAL AZUL */}
        <div className="bloco-visual">
          <div className="marca-centro">
            <div className="icone-s">S</div>
            <h4>SEGPLAN</h4>
            <span>Engenharia Diagnóstica</span>
          </div>

          {/* Emblema destacado e sobreposto */}
          <div className="emblema-experiencia">
            <span className="numero">15+</span>
            <span className="texto">Anos de experiência</span>
          </div>
        </div>

        {/* LADO DIREITO: TEXTOS E DIFERENCIAIS */}
        <div className="bloco-textos">
          <h2>
            Técnica, <br />
            <span className="titulo-azul">confiança e compromisso</span> <br />
            com seu patrimônio.
          </h2>

          <div className="paragrafos">
            <p>
              A SEGPLAN Consultoria Ltda. é uma empresa especializada em
              engenharia diagnóstica, com sede em Recife/PE. Atuamos com laudos
              técnicos, inspeção predial, avaliações de imóveis e fiscalização
              de obras, sempre com responsabilidade técnica e cobertura via ART
              (Anotação de Responsabilidade Técnica).
            </p>
            <p>
              Nosso diretor técnico Marcelo Wanderley Carmo lidera uma equipe
              comprometida com a qualidade, segurança e transparência nos
              diagnósticos entregues.
            </p>
          </div>

          {/* GRID COM OS 4 DIFERENCIAIS DA EMPRESA */}
          <div className="pilares-grid">
            <div className="pilar-item">
              <div className="pilar-icon">
                <FaShieldAlt size={18} />
              </div>
              <div className="pilar-info">
                <h5>Segurança Técnica</h5>
                <p>ART em todos os serviços</p>
              </div>
            </div>

            <div className="pilar-item">
              <div className="pilar-icon">
                <FaRegFileAlt size={18} />
              </div>
              <div className="pilar-info">
                <h5>Responsabilidade</h5>
                <p>Compromisso com o cliente</p>
              </div>
            </div>

            <div className="pilar-item">
              <div className="pilar-icon">
                <FaRegEye size={18} />
              </div>
              <div className="pilar-info">
                <h5>Transparência</h5>
                <p>Laudos claros e objetivos</p>
              </div>
            </div>

            <div className="pilar-item">
              <div className="pilar-icon">
                <FaUsers size={18} />
              </div>
              <div className="pilar-info">
                <h5>Equipe Técnica</h5>
                <p>Engenheiros especializados</p>
              </div>
            </div>
          </div>

          {/* PAINEL INFERIOR DE INFORMAÇÕES FISCAIS */}
          <div className="dados-empresa-box">
            <span>Dados da empresa</span>
            <h6>SEGPLAN CONSULTORIA LTDA</h6>
            <p>CNPJ: 64.872.044/0001-94</p>
            <p>Rua Guimarães Peixoto, nº 75, Casa Amarela, Recife/PE</p>
          </div>
        </div>
      </div>
    </QuemSomosContainer>
  );
}
