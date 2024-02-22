import styled from "styled-components";


export const PlayerInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  height: 100%;
`;
export const TeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin:1rem -10px;
`;

export const PlayerInput = styled.input<{ color: string }>`
  flex: 1;
  border: 3px solid ${props => props.color};
  margin: 0 10px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: 10px;
`;