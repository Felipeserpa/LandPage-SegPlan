import React from 'react';
import { FiInstagram, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
//import { HiOutlineMapPin } from 'react-icons/hi2';
import { IoCallOutline, IoMailOutline, IoTimeOutline } from 'react-icons/io5';
import FooterContainer from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        {/* COLUNA 1: INSTITUCIONAL */}
        <div className="coluna-institucional">
          <div className="logo-placeholder">
            {/* Ícone fictício que simula o 'S' azul da marca */}
            <div
              style={{
                background: '#2563eb',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              S
            </div>
            <div className="logo-mock">
              SEGPLAN
              <span>LAUDOS • PROJETOS • AVALIAÇÕES</span>
            </div>
          </div>
          <p className="descricao-empresa">
            Engenharia diagnóstica com responsabilidade técnica, credibilidade e
            compromisso com a proteção do seu patrimônio.
          </p>
          <span className="cnpj-texto">CNPJ: 64.872.044/0001-94</span>

          <div className="redes-sociais">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rede-icon"
              aria-label="Instagram"
            >
              <FiInstagram size={18} />
            </a>
            <a
              href="https://wa.me/5581989282737"
              target="_blank"
              rel="noopener noreferrer"
              className="rede-icon"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>
            <a href="#" className="rede-icon" aria-label="Website">
              <FiGlobe size={18} />
            </a>
          </div>
        </div>

        {/* COLUNA 2: SERVIÇOS */}
        <div className="coluna-links">
          <h4>Serviços</h4>
          <nav>
            <a href="#servicos">Inspeção Predial</a>
            <a href="#servicos">Laudos Técnicos</a>
            <a href="#servicos">Avaliação de Imóveis</a>
            <a href="#servicos">Fiscalização de Obras</a>
            <a href="#servicos">Perícia de Engenharia</a>
            <a href="#servicos">Consultoria Técnica</a>
          </nav>
        </div>

        {/* COLUNA 3: EMPRESA */}
        <div className="coluna-links">
          <h4>Empresa</h4>
          <nav>
            <a href="#quem-somos">Quem Somos</a>
            <a href="#como-funciona">Como Funciona</a>
            <a href="#faq">FAQ</a>
            <a href="#contato">Contato</a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </nav>
        </div>

        {/* COLUNA 4: CONTATO */}
        <div className="coluna-contato">
          <h4>Contato</h4>
          <div className="info-lista">
            <div className="info-item">
              <span>
                Rua Guimarães Peixoto, 75,
                <br />
                Casa Amarela, Recife/PE
              </span>
            </div>

            <div className="info-item">
              <IoCallOutline size={18} />
              <span>(81) 98928-2737</span>
            </div>

            <div className="info-item">
              <IoMailOutline size={18} />
              <span>contato@segplan.seg.br</span>
            </div>

            <div className="info-item">
              <IoTimeOutline size={18} />
              <span>Seg–Sex: 8h às 18h</span>
            </div>
          </div>
        </div>
      </div>

      {/* REPASSE INFERIOR DE DIREITOS E AUTORIDADE */}
      <div className="barra-inferior">
        <p>© 2025 SEGPLAN Consultoria Ltda. Todos os direitos reservados.</p>

        <div className="crea-registro">
          <span>Registro</span>
          <span className="badge-crea">CREA-PE</span>
          <span>ativo</span>
        </div>
      </div>
    </FooterContainer>
  );
}
