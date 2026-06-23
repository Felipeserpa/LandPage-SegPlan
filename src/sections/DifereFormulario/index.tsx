import React, { useState } from 'react';
import {
  FaShieldAlt,
  FaRegClock,
  FaRegFileAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import ContatoContainer from './styles';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    mensagem: '',
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Dados da proposta enviados:', formData);
  };

  return (
    <ContatoContainer id="contato">
      <div className="conteudo-wrapper">
        {/* COLUNA ESQUERDA: TEXTO E DIFERENCIAIS */}
        <div className="coluna-esquerda">
          <div className="header-diferenciais">
            <div className="tag-por-que">Por que a Segplan</div>
            <h2>
              Diferenciais que fazem a{' '}
              <span className="text-gradient">diferença na prática</span>
            </h2>
          </div>

          <div className="diferenciais-list">
            {/* Diferencial 1 */}
            <div className="card-diferencial">
              <div className="icon-holder">
                <FaShieldAlt size={20} />
              </div>
              <div className="textos-diferencial">
                <h3>Responsabilidade Técnica com ART</h3>
                <p>
                  Todos os nossos serviços são formalizados com Anotação de
                  Responsabilidade Técnica (ART) no CREA-PE, garantindo
                  segurança jurídica e técnica para o contratante.
                </p>
              </div>
            </div>

            {/* Diferencial 2 */}
            <div className="card-diferencial">
              <div className="icon-holder">
                <FaRegClock size={20} />
              </div>
              <div className="textos-diferencial">
                <h3>Laudos entregues em até 7 dias úteis</h3>
                <p>
                  Sabemos que o tempo é um recurso valioso. Nosso processo
                  otimizado garante agilidade sem comprometer a qualidade
                  técnica dos documentos entregues.
                </p>
              </div>
            </div>

            {/* Diferencial 3 */}
            <div className="card-diferencial">
              <div className="icon-holder">
                <FaRegFileAlt size={20} />
              </div>
              <div className="textos-diferencial">
                <h3>Laudos claros, objetivos e acionáveis</h3>
                <p>
                  Nossos documentos são elaborados para serem compreendidos por
                  qualquer pessoa, não apenas por engenheiros. Com recomendações
                  práticas e prioridades definidas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: FORMULÁRIO DE CAPTURA */}
        <div className="card-formulario">
          <h3>Solicite sua proposta</h3>
          <p className="sub-form">
            Preencha os dados abaixo e retornaremos em até 2 horas úteis com uma
            proposta personalizada.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="nome"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="telefone"
                placeholder="WhatsApp / Telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <select
                name="servico"
                value={formData.servico}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Selecione o serviço...
                </option>
                <option value="inspeção">Inspeção Predial</option>
                <option value="laudos">Laudos Técnicos</option>
                <option value="avaliacao">Avaliação de Imóveis</option>
                <option value="fiscalizacao">Fiscalização de Obras</option>
                <option value="pericia">Perícia de Engenharia</option>
                <option value="consultoria">Consultoria Técnica</option>
              </select>
            </div>

            <div className="input-group">
              <textarea
                name="mensagem"
                placeholder="Descreva brevemente o seu imóvel e necessidade..."
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Enviar Solicitação
            </button>
          </form>

          <div className="whatsapp-divider">Prefere falar agora?</div>

          <a
            href="https://wa.me/5581999999999" // Ajuste o DDI/DDD se necessário
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp size={18} />
            <span>Abrir WhatsApp</span>
          </a>
        </div>
      </div>
    </ContatoContainer>
  );
}
