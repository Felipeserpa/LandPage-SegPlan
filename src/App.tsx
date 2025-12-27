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
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>
          SegPlan Engenharia | Avaliação de Imóveis e Laudos Técnicos
        </title>

        <meta
          name="description"
          content="Especialistas em Laudo de Avaliação de Imóveis, Perícias de Engenharia e Inspeção Predial. Garantia técnica e segurança jurídica para seu patrimônio com a SegPlan."
        />

        <meta
          name="keywords"
          content="engenharia diagnóstica, laudo de avaliação de imóveis, perícia de engenharia, inspeção predial, SegPlan Engenharia"
        />

        <meta
          property="og:title"
          content="SegPlan Engenharia - Laudos Técnicos"
        />
        <meta
          property="og:description"
          content="Segurança e precisão em engenharia diagnóstica."
        />
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
