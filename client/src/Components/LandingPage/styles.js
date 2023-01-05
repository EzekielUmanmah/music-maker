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
  text-align: center;
  -webkit-box-shadow: 3px 0px 19px 0px rgba(224, 224, 224, 1);
  -moz-box-shadow: 3px 0px 19px 0px rgba(224, 224, 224, 1);
  box-shadow: 3px 0px 19px 0px rgba(224, 224, 224, 1);

  @media screen and (max-width: 678px) {
    font-size: 3em;
  }
`;
