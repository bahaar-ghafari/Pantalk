import styled from "styled-components";

export const TeamTimer = styled.div<{
  $isActive: boolean;
  color: string;
  width: string;
}>`
  background: ${(props) => props.color};
  opacity: ${(props) => (props.$isActive ? "100%" : "30%")};
  width: ${(props) => props.width};
  transition: width 1s linear;
  border-radius: 7px;
`;
