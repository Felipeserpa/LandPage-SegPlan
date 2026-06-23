import React from 'react';
import {
  FaBuilding,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaShieldAlt,
  FaRegClock,
  FaUsers,
  FaMapMarkerAlt,
  FaArrowRight,
  FaWhatsapp,
} from 'react-icons/fa';
import Container from './styles';

export default function HeroSection() {
  return (
    <Container>
      {/* 1. FUNDO TÉCNICO BLUEPRINT COBRINDO A TELA */}
      <div className="bg-blueprint" />

      {/* 2. CONTEÚDO DO HERO */}
      <div className="hero-content">
        <div className="hero-grid">
          {/* LADO ESQUERDO: TEXTOS E BOTÕES DE AÇÃO */}
          <div className="hero-left">
            <div className="tag-localizacao">
              <span className="tag-dot" />
              Engenharia Diagnóstica em Recife/PE
            </div>

            <h1>
              Proteja seu <br />
              <span className="text-gradient">patrimônio</span> <br />
              com engenharia séria.
            </h1>

            <p className="descricao">
              Laudos técnicos, inspeção predial, avaliações de imóveis e
              fiscalização de obras com responsabilidade técnica, credibilidade
              e agilidade que o seu patrimônio merece.
            </p>

            <div className="hero-buttons">
              <a
                href="https://wa.me/5581989282737"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <FaWhatsapp size={16} />
                Fale com a SEGPLAN
              </a>
              <a href="#servicos" className="btn-secondary">
                Nossos Serviços
                <FaArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* LADO DIREITO: CARD DE MONITORAMENTO (GLASS/VIDRO FOSCO) */}
          <div className="hero-right">
            <div className="card-glass">
              <div className="card-header">
                <div className="icon-wrapper">
                  <FaBuilding size={20} />
                </div>
                <div className="card-title">
                  <h3>Diagnóstico em andamento</h3>
                  <p>Inspeção Predial — Ed. Recife Center</p>
                </div>
              </div>

              <div className="progress-group">
                <div>
                  <div className="progress-label">
                    <span>Fase de Análise</span>
                    <span style={{ color: '#60a5fa', fontFamily: 'monospace' }}>
                      72%
                    </span>
                  </div>
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ width: '72%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="progress-label">
                    <span>Elaboração do Laudo</span>
                    <span style={{ color: '#60a5fa', fontFamily: 'monospace' }}>
                      45%
                    </span>
                  </div>
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ width: '45%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CARDS MENORES LADO A LADO */}
            <div className="grid-cards-mini">
              <div className="card-mini">
                <div
                  className="icon-mini"
                  style={{
                    background: 'rgba(34,211,238,0.1)',
                    color: '#22d3ee',
                  }}
                >
                  <FaRegFileAlt size={16} />
                </div>
                <div>
                  <h4>Laudo entregue</h4>
                  <p>Condomínio Boa Vista</p>
                </div>
              </div>

              <div className="card-mini">
                <div
                  className="icon-mini"
                  style={{
                    background: 'rgba(59,130,246,0.1)',
                    color: '#60a5fa',
                  }}
                >
                  <FaRegCalendarAlt size={16} />
                </div>
                <div>
                  <h4>Vistoria agendada</h4>
                  <p>Amanhã, 9h00</p>
                </div>
              </div>
            </div>

            {/* SEÇÃO DA CERTIFICAÇÃO CREA */}
            <div className="card-mini" style={{ width: '100%' }}>
              <div
                className="icon-mini"
                style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}
              >
                <FaShieldAlt size={16} />
              </div>
              <div>
                <h4>Certificação CREA-PE ativa</h4>
                <p>Responsabilidade Técnica garantida em todos os laudos</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTADORES NUMÉRICOS INFERIORES */}
        <div className="counters-row">
          <div className="counter-item">
            <span className="number">1200+</span>
            <span className="label">Laudos emitidos</span>
          </div>
          <div className="counter-item">
            <span className="number">15+</span>
            <span className="label">Anos de experiência</span>
          </div>
          <div className="counter-item">
            <span className="number">100%</span>
            <span className="label">Registrados CREA</span>
          </div>
        </div>
      </div>

      {/* 3. BARRA DE REQUISITOS INFERIOR (BRANCA) */}
      <div className="footer-bar">
        <div className="footer-container">
          <div className="footer-item">
            <FaShieldAlt size={16} />
            <span>Registro CREA-PE ativo</span>
          </div>
          <div className="footer-item">
            <FaRegFileAlt size={16} />
            <span>ARTs em todos os serviços</span>
          </div>
          <div className="footer-item">
            <FaRegClock size={16} />
            <span>Laudos em até 7 dias úteis</span>
          </div>
          <div className="footer-item">
            <FaUsers size={16} />
            <span>Equipe multidisciplinar</span>
          </div>
          <div className="footer-item">
            <FaMapMarkerAlt size={16} />
            <span>Recife/PE — Atendimento Presencial</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
