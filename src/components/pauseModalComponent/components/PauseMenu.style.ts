import styled from "styled-components";

export const StyledList = styled.div`
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction:column;

  & > button {
    height: 60px;
    margin: 0.5rem;
  }
`;
