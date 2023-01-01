import player from './player.jpg';
import { Container, Background, Title, Sub } from './styles';
import AuthModal from '../auth/AuthModal';

export default function LandingPage() {
  return (
    <Container>
      <Background src={player} alt='music player' />
      <Title>Welcome to MusicMaker</Title>
      <Sub>Where you can play music and record yourself!</Sub>
      <AuthModal />
    </Container>
  );
}
