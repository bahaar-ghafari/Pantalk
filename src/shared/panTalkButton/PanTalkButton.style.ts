import { gradient } from "@pt/constants/general";
import styled, { css }  from "styled-components";

export const GradientButton = styled.button`
  background:${gradient}
  border-radius: 10px;
  display:flex;
  align-items:center;
  justify-content:center;
  width: 100%;
  height:60px;
  border: none;
  color: white;
  font-weight: bold;
  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: 0.65;
  `}
`;
