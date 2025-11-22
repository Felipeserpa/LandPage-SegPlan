import Container from './styles';

export default function Loading() {
  return (
    <Container>
      <div className="screen">
        <div id="loading">
          <div className="circle" />
        </div>
      </div>
    </Container>
  );
}
