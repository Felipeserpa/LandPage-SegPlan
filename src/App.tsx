import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
//import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './sections/clientes';
import Hero from './sections/Hero';
import Skills from './sections/Serviço';
import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';
import About from './sections/About';
//import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* 🟢 COLOQUE O HELMET AQUI, NO TOPO DO RETURN */}
      <Helmet>
        {/* TÍTULO DA PÁGINA (Meta Title) */}
        <title>
          Laudo de Avaliação de Imóveis | Projetos e Laudos Técnicos | SegPlan
        </title>

        {/* META DESCRIPTION (Texto que aparece no Google) */}
        <meta
          name="description"
          content="Especialistas em Laudos de Avaliação e Projetos de Engenharia. A SegPlan oferece certificação e segurança para o seu patrimônio. Solicite um orçamento sem compromisso."
        />

        {/* TAGS OPEN GRAPH (Para o compartilhamento em redes sociais) */}
        <meta
          property="og:title"
          content="SegPlan | Laudos, Projetos e Avaliações de Engenharia"
        />
        <meta property="og:url" content="https://www.segplan.com.br/" />
        {/* Adicione a tag og:image com o URL de uma boa imagem */}
      </Helmet>
      {/* ------------------------------------------- */}

      <Toaster position="bottom-right" font-size="1 rem" />
      <GlobalStyles />
      <Header />
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Contact />
      {/* <Analytics /> */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
