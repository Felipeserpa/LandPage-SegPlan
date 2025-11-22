import Cards from '../../components/Cards/Cards';
import Container from './styles';

export default function cliente() {
  return (
    <Container>
      <section className="section-grey " id="cliente">
        <div className="container">
          <h1 className="section-title text-blue">Missão</h1>
          <p
            className="text-blue"
            style={{
              textAlign: 'center',
              padding: '20px',
              width: '100%',
              fontSize: '20px',
            }}
          >
            Na MOOVE+ , mais do que transportar, cuidamos de cada detalhe para
            que nossos passageiros se sintam acolhidos e respeitados,
            proporcionando um trajeto seguro , com dignidade, respeito e
            empatia, reconhecendo suas necessidades emocionais e sociais.
          </p>{' '}
          <div className="section-container">
            <Cards />
          </div>
        </div>{' '}
      </section>
    </Container>
  );
}
