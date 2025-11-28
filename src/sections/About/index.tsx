// src/components/CredibilityCard/CredibilityCard.jsx (Novo Nome)
import React from 'react';
import styled from 'styled-components';
// ... Definição do Styled-Component Container na seção 2.
import Container from '../About/styles';
// Dados dos Engenheiros
const profiles = [
  {
    role: 'Responsável Técnico',
    name: 'Eng. Marcello Rodrigo Cavalcante da Silva',
    crea: 'CREA-PE 49770 e CREA-BA 300416',
    photoSrc: '/caminho/para/foto-tecnico.jpg', // Ajuste este caminho
    qualifications: [
      '18+ anos de experiência em engenharia civil e diagnóstica.',
      'Especialista em laudos técnicos, inspeções prediais e fiscalização de obras.',
      'Valoriza o atendimento de vistoria.',
      'Garantia de máxima precisão e conformidade técnica.',
    ],
    isReversed: false, // Foto Esquerda | Texto Direita
  },
  {
    role: 'Diretor Comercial',
    name: 'Marcelo Wanderley',
    photoSrc: '/caminho/para/foto-comercial.jpg', // Ajuste este caminho
    qualifications: [
      'Gestão comercial e relacionamento com o cliente.',
      'Ponto de contato principal para novos projetos.',
      'Desenvolvimento de parcerias estratégicas.',
      'Garantia de atendimento de excelência.',
      'Busca das melhores soluções.',
    ],
    isReversed: true, // Foto Direita | Texto Esquerda (Zig-Zag)
  },
];

interface ProfileRowProps {
  role: string;
  name: string;
  crea?: string; // O '?' torna a propriedade opcional
  qualifications: string[];
  photoSrc: string;
  isReversed: boolean;
}

const ProfileRow: React.FC<ProfileRowProps> = ({
  role,
  name,
  crea,
  qualifications,
  photoSrc,
  isReversed,
}) => (
  <div className={`profile-row ${isReversed ? 'reversed' : ''}`}>
    {/* Coluna da Foto e Descrição */}
    <div className="profile-info">
      <div className="photo-wrapper">
        <img
          src={photoSrc}
          alt={`Foto do ${name}`}
          className="engineer-photo"
        />
      </div>
      <div className="text-info">
        <p className="role">{role}</p>
        <h3 className="name">{name}</h3>
        {crea && <p className="crea">{crea}</p>}

        <ul className="qualification-list">
          {qualifications.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function CredibilityCard() {
  return (
    <Container>
      <div className="credibility-card-wrapper">
        {' '}
        {/* O Card Branco Grande */}
        {profiles.map((profile, index) => (
          <ProfileRow
            key={index}
            role={profile.role}
            name={profile.name}
            crea={profile.crea}
            qualifications={profile.qualifications}
            photoSrc={profile.photoSrc}
            isReversed={profile.isReversed}
          />
        ))}
      </div>
    </Container>
  );
}
