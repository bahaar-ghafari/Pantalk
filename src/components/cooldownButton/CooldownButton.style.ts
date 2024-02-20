import { IonButton } from "@ionic/react";
import styled from "styled-components";

export const CooldownButton = styled(IonButton)`
  transition: opacity 2s linear;
  min-width: 235px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
