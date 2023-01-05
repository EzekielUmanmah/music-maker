import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3em;
  width: 100%;
  height: 100%;
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

  @media screen and (max-width: 678px) {
    flex-direction: column;
    min-width: 60%;
  }

  @media screen and (max-width: 476px) {
    min-width: 80%;
  }
`;
