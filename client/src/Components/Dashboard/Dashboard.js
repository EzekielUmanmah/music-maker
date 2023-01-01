import PianoPad from '../Music Pads/PianoPad';
import Player from '../Player/Player';
import Header from '../Header/Header';
import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <PianoPad />
      <Player />
    </Container>
  );
}
