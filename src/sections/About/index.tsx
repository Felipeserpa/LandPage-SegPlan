import React from 'react';
import { FaUser, FaRegCheckCircle } from 'react-icons/fa';
import Container from './styles';

// Importação das fotos (ajuste os caminhos se necessário)
import marceloWanderley from '../../assets/images/marcelo.jpeg';
import marcelloRodrigo from '../../assets/images/marceloComercial.jpeg';

const profiles = [
  {
    badgeText: 'CREA ATIVO',
    firstName: 'Marcello Rodrigo',
    lastName: 'Cavalcante da Silva',
    role: 'Engenheiro Civil • Eng. de Segurança do Trabalho',
    centerBadge: 'CREA nº 181039919-0',
    listTitle: 'ÁREAS DE ATUAÇÃO',
    photoSrc: marceloWanderley,
    qualifications: [
      'Engenharia Diagnóstica avançada.',
      'Inspeção Predial completa de sistemas construtivos.',
      'Auditorias, Avaliações e Perícias de Engenharia.',
      'Gerenciamento de Obras e Controle de Qualidade.',
      'Atuação como Perito Judicial Federal, Estadual e Trabalhista.',
    ],
  },
  {
    badgeText: 'DIRETOR',
    firstName: 'Marcelo Wanderley',
    lastName: 'Carmo',
    role: 'Diretor Comercial • SEGPLAN',
    centerBadge: 'Diretor Comercial',
    listTitle: 'RESPONSABILIDADES',
    photoSrc: marcelloRodrigo,
    qualifications: [
      'Gestão Comercial e Relacionamento estratégico.',
      'Atendimento consultivo e elaboração de Proposta Técnica.',
      'Desenvolvimento de novos negócios e expansão de mercado.',
      'Estratégia comercial alinhada aos critérios técnicos do CREA.',
      'Garantia de padrão de excelência em contratos corporativos.',
    ],
  },
];

export default function CredibilityCard() {
  return (
    <Container id="equipe">
      {/* CABEÇALHO INSTITUCIONAL */}
      <div className="section-header">
        <div className="tag-equipe">Nossa Equipe</div>
        <h2>
          Os profissionais por trás de cada{' '}
          <span className="text-gradient">diagnóstico técnico</span>
        </h2>
        <p className="subtitulo">
          Responsabilidade técnica com nome, CREA e experiência comprovada.
        </p>
      </div>

      {/* GRID COM OS DOIS ENGENHEIROS LADO A LADO */}
      <div className="team-grid">
        {profiles.map((profile, index) => (
          <div className="profile-card" key={index}>
            {/* Banner superior azul escuro */}
            <div className="card-top-banner">
              <span className="status-badge">{profile.badgeText}</span>
            </div>

            {/* Foto Redonda sobreposta na linha divisória */}
            <div className="photo-container">
              <div className="avatar-placeholder">
                {profile.photoSrc ? (
                  <img
                    src={profile.photoSrc}
                    alt={`${profile.firstName} ${profile.lastName}`}
                  />
                ) : (
                  <FaUser size={40} />
                )}
              </div>
            </div>

            {/* Informações textuais de identificação */}
            <div className="card-body">
              <h3 className="engineer-name">{profile.firstName}</h3>
              <p className="engineer-subname">{profile.lastName}</p>
              <p className="role-label">{profile.role}</p>

              {/* Distintivo centralizado azul claro */}
              <div className="badge-info-center">
                {profile.badgeText === 'CREA ATIVO' && (
                  <FaRegCheckCircle size={13} />
                )}
                <span>{profile.centerBadge}</span>
              </div>

              {/* Lista interna de atribuições técnicas */}
              <div className="list-section">
                <h4>{profile.listTitle}</h4>
                <ul className="qualification-list">
                  {profile.qualifications.map((q, idx) => (
                    <li key={idx}>{q}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
