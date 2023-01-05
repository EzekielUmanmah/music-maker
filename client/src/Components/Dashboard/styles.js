import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3em;
  width: 100%;
  height: 100%;
  border: 3px dashed red;
`;
export const MusicContainer = styled.section`
  display: flex;
  justify-content: center;
  align-self: center;
  max-width: 55%;
  height: 50%;
  background-color: #212121;
  border-radius: 2%;
  border: 2px solid #616161;
`;
// Container should be the <Dashboard />'s main container
// the music player should be one flex item containing its elements
// the table should be the 2nd flex item
