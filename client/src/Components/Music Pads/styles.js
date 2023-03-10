import styled from 'styled-components';

export const Container = styled.section`
  padding: 5px;
  margin: 0.5em;
  border: 1px solid #9e9e9e;
  border-style: groove;
  border-radius: 2%;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  width: 60%;
  column-gap: 0.5em;

  @media screen and (max-width: 876px) {
    width: 90%;
    justify-content: center;
  }
`;

export const Pad = styled.button`
  border: none;
  background: #121010;
  box-shadow: 0px 0px 8px 1px #616161 inset, 3px 0px 1px 0.5px black,
    1.5px 1.5px 1px 0.5px black;
  font-size: 1em;
  padding: 5px;
  width: 4em;
  height: 4em;
  margin-top: 10px;
  line-height: 10px;
  color: white;
  text-align: center;
  border-radius: 50%;
  outline: none;

  @media screen and (max-width: 300px) {
    width: 3em;
    height: 3em;
  }

  :active,
  .keydown {
    box-shadow: 0px 0px 6px 1px #76ff03 inset, 2.5px 0px 1px 0.5px black,
      1.5px 1px 1px 0.5px black;
    color: #76ff03;
  }
`;
