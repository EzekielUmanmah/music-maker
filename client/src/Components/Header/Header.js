import { Container, Heading } from './styles';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../App';
import { useContext } from 'react';

export default function Header() {
  const [state, setState] = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    setState((state) => ({ ...state, user: null, music: [] }));
    localStorage.clear();
    navigate('/');
  };

  return (
    <Container>
      <Heading>Welcome to MusicMaker, {state.user || 'No Name Found'}</Heading>
      <Button onClick={logout}>Log Out</Button>
    </Container>
  );
}
