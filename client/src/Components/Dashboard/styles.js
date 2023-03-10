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
  max-width: 45%;
  max-width: 500px;
  height: 50%;
  background-color: #212121;
  border-radius: 2%;
  border: 2px solid #616161;

  @media screen and (max-width: 678px) {
    flex-direction: column;
    max-width: 60%;
  }

  @media screen and (max-width: 476px) {
    max-width: 80%;
  }
`;
