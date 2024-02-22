import { gradient } from "@pt/constants/general";
import styled from "styled-components";

export const GradientButton = styled.button`
  background:${gradient}
  border-radius: 10px;
  display:flex;
  align-items:center;
  justify-content:center;
  width: 100%;
  height:60px;
  & > span {
  display:flex;
  align-items:center;
  justify-content:center;
  color: #2f2d2d;
  background: white;
  width: 90%;
  height: 80%;
  border-radius: 10px;
  }
`;
