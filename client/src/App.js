import React, { useRef, useState, createContext, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import Dashboard from './Components/Dashboard/Dashboard';
import { GlobalStyle } from './styles';
import axios from 'axios';

export const AppContext = createContext();

export function App() {
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

  const [state, setState] = useState(initialState);
  const user = JSON.parse(localStorage.getItem('profile'));
  const id = user ? user.user_id : null;

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:4000/clips/${id}`)
        .then((res) => {
          setState((state) => ({ ...state, clips: res.data }));
        })
        .catch((err) => console.log('App getClips err: ', err));
    }
  }, [id]);

  return (
    <div className='app'>
      <AppContext.Provider value={[state, setState]}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/player' element={<Dashboard />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}
