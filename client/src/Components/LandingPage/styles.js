import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  border: 15px solid;
`;

export const Background = styled.img`
  opacity: 0.1;
  position: fixed;
`;

export const Title = styled.h1`
  background-color: #516ba6;
  z-index: 1;
  font-size: 5em;
  font-weight: bold;
`;

export const Sub = styled.sub`
  font-size: 1.5em;
  font-style: italic;
  color: #dadfeb;
`;
