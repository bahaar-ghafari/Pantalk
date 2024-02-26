import styled from "styled-components";

export const StyledList = styled.div`
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 2rem;
  color: white;
  & > button {
    margin: 0.5rem 0;
  }
`;
