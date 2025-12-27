import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './sections/Hero';
import Skills from './sections/Serviço';
import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';
import About from './sections/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        {/* TÍTULO: Otimizado para buscas locais e serviços principais */}
        <title>
          SegPlan Engenharia | Avaliação de Imóveis e Laudos Técnicos
        </title>

        {/* DESCRIPTION: Deve conter as palavras-chave principais e um 'Call to Action' */}
        <meta
          name="description"
          content="Especialistas em Laudo de Avaliação de Imóveis, Perícias de Engenharia e Inspeção Predial. Garantia técnica e segurança jurídica para seu patrimônio com a SegPlan."
        />

        {/* KEYWORDS: Embora o Google dê menos peso, ainda ajuda em outros buscadores */}
        <meta
          name="keywords"
          content="engenharia diagnóstica, laudo de avaliação de imóveis, perícia de engenharia, inspeção predial, SegPlan Engenharia, avaliação patrimonial, engenheiro civil perito"
        />

        {/* OPEN GRAPH: Melhora o clique quando o link é compartilhado no WhatsApp/Instagram */}
        <meta
          property="og:title"
          content="SegPlan Engenharia - Laudos e Avaliações Técnicas"
        />
        <meta
          property="og:description"
          content="Segurança e precisão em engenharia diagnóstica e avaliações imobiliárias."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.segplan.com.br/" />
        {/* Recomendo adicionar uma imagem de preview: */}
        {/* <meta property="og:image" content="www.segplan.com.br" /> */}

        {/* CANONICAL: Evita conteúdo duplicado */}
        <link rel="canonical" href="https://www.segplan.com.br/" />
      </Helmet>
      <Toaster position="bottom-right" />
      <GlobalStyles />
      <Header />
      <Hero />
      <Skills />
      <About />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
