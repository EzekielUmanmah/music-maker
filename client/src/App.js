import React, { useRef, useState, createContext } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import Dashboard from './Components/Dashboard/Dashboard';
import { GlobalStyle } from './styles';

export const AppContext = createContext();

export function App() {
  const [state, setState] = useState({
    user: null,
    str: 'Online',
    status: true,
    mute: false,
    refsArray: useRef([]),
    music: [],
    isRecord: false,
  });
  // console.log('app: ', state);
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
