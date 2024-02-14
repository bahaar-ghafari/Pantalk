import styled from "styled-components";

// Styled-components
export const GameContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Player = styled.div<{ angle: number; color: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: absolute;
  transform: ${(props) =>
    `rotate(${props.angle}deg) translate(200px) rotate(-${props.angle}deg)`};

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
`;
