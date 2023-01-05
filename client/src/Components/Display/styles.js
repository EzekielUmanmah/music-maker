import styled from 'styled-components';

export const Container = styled.section`
  border: 1px solid #9e9e9e;
  border-style: groove;
  border-radius: 2%;
  margin: 0.5em;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const Output = styled.p`
  font-family: Inconsolata, monospace;
  background-color: #90caf9;
  height: 3.5em;
  text-align: center;
  line-height: 1.5em;
  width: 50%;
  border-style: inset;
  overflow-y: scroll;
`;

export const Button = styled.button`
  border-radius: 50%;
  cursor: pointer;
  border: none;
  outline: none;
  height: 32px;
  background: #212121;
  margin-top: 0.5em;
  box-shadow: 0px 0px 2px 0.2px #616161 inset, 2.5px 0px 1px 0.5px black,
    1.5px 1px 1px 0.5px black;

  :active {
    transform: translateY(0.5px);
  }

  .save-btn {
    width: 20px;
    font-size: 1.5em;
    color: white;
  }
  .power-btn {
    font-size: 1.5em;
  }
  .play-btn {
    font-size: 1.5em;
  }
  .record-btn {
    width: 20px;
    font-size: 1.5em;
  }
`;
