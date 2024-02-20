import PanTaclkButton from "@pt/shared/panTaclkButton/PanTaclkButton";
import styled from "styled-components";

export const CooldownButton = styled(PanTaclkButton)`
  transition: opacity 2s linear;
  min-width: 235px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
