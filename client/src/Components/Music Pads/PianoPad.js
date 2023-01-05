import { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Container, Pad } from './styles';
import { AppContext } from '../../App';
import { pianoClips } from './music';
import '../../styles.css';

export default function PianoPad() {
  const [state, setState] = useContext(AppContext);
  const { refsArray, status, isRecord, currClip } = state;

  const onKeyPress = (clip) => {
    clip.pause();
    clip.play();
    const note = clip.getAttribute('class');

    if (isRecord) {
      // prettier-ignore
      const recStr = currClip.length === 0 ? note : currClip.join(', ') + ', ' + note + ', ';

      setState((state) => ({
        ...state,
        str: recStr,
        currClip: [...state.currClip, note],
      }));
    } else {
      setState((state) => ({ ...state, str: note }));
    }
  };

  const buttons = pianoClips.map((clip, i) => (
    <Pad
      className='pad'
      key={i}
      id={clip.audioID}
      onClick={() => onKeyPress(refsArray.current[i])}
      disabled={!status}
    >
      <audio
        className={clip.note}
        id={clip.audioID}
        src={clip.src}
        ref={(ref) => (refsArray.current[i] = ref)}
      ></audio>
      {clip.note}
    </Pad>
  ));

  return (
    <CSSTransition appear in={!status} timeout={500} classNames='fade'>
      <Container>{buttons}</Container>
    </CSSTransition>
  );
}
