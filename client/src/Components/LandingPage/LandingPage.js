import player from './player.jpg';
import { Container, Background, Title } from './styles';
import AuthModal from '../auth/AuthModal';

export default function LandingPage() {
  return (
    <Container>
      <Background src={player} alt='music player' />
      <Title>Welcome to MusicMaker</Title>
      <AuthModal />
    </Container>
  );
}
