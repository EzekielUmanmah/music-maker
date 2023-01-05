import PianoPad from '../Music Pads/PianoPad';
import Header from '../Header/Header';
import Display from '../Display/Display';
import ClipTable from '../Table/ClipTable';
import { Container, MusicContainer } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <MusicContainer>
        <PianoPad />
        <Display />
      </MusicContainer>
      <ClipTable />
    </Container>
  );
}
