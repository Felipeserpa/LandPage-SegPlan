import React, { useState } from 'react';
import { FaHome, FaBriefcase, FaChartBar } from 'react-icons/fa';
import QuizContainer from './styles';

export default function DiagnosticoRapido() {
  // Estado para monitorar qual card foi selecionado pelo usuário
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    // Aqui você pode adicionar lógica para avançar de etapa automaticamente ou salvar a resposta
    console.log(`Opção selecionada: ${id}`);
  };

  return (
    <QuizContainer>
      {/* BACKGROUND COM AS LINHAS TÉCNICAS */}
      <div className="bg-blueprint" />

      {/* CONTEÚDO CENTRALIZADO */}
      <div className="quiz-content">
        <div className="tag-diagnostico">Diagnóstico Rápido</div>

        <h2>
          Qual serviço a <span className="text-gradient">SEGPLAN</span> pode
          oferecer pra você?
        </h2>

        <p className="subtitulo">
          Responda 2 perguntas e saiba exatamente o que você precisa.
        </p>

        {/* CONTAINER DO FORMULÁRIO / INTERATIVIDADE */}
        <div className="quiz-card-box">
          {/* Indicador de passos (3 círculos, o primeiro ativo conforme a imagem) */}
          <div className="steps-indicator">
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
          </div>

          <h3>Qual tipo de imóvel?</h3>
          <p className="instrucao">
            Selecione a opção que melhor descreve o seu caso
          </p>

          {/* GRID COM OS CARDS CLICÁVEIS */}
          <div className="options-grid">
            {/* Card Residencial */}
            <div
              className={`option-card ${
                selectedOption === 'residencial' ? 'selected' : ''
              }`}
              onClick={() => handleSelect('residencial')}
            >
              <div className="icon-container">
                <FaHome size={28} />
              </div>
              <span>Residencial</span>
            </div>

            {/* Card Comercial */}
            <div
              className={`option-card ${
                selectedOption === 'comercial' ? 'selected' : ''
              }`}
              onClick={() => handleSelect('comercial')}
            >
              <div className="icon-container">
                <FaBriefcase size={26} />
              </div>
              <span>Comercial</span>
            </div>

            {/* Card Condomínio */}
            <div
              className={`option-card ${
                selectedOption === 'condominio' ? 'selected' : ''
              }`}
              onClick={() => handleSelect('condominio')}
            >
              <div className="icon-container">
                <FaChartBar size={26} />
              </div>
              <span>Condomínio</span>
            </div>
          </div>
        </div>
      </div>
    </QuizContainer>
  );
}
