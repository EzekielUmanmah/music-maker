import { useRef } from 'react';
import { Container, Heading } from './styles';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../App';
import { useContext } from 'react';

export default function Header() {
  const [state, setState] = useContext(AppContext);
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();

  const initialState = {
    user_id: null,
    user: null,
    str: 'Online',
    status: false,
    mute: false,
    refsArray: useRef([]),
    currClip: [],
    isRecord: false,
    clips: null,
  };

  const logout = () => {
    setState(initialState);
    localStorage.clear();
    navigate('/');
  };

  return (
    <Container>
      <Heading>Welcome, {user.name || 'No Name Found'}</Heading>
      <Button onClick={logout}>Log Out</Button>
    </Container>
  );
}
