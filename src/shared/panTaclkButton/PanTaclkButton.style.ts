import { IonButton } from "@ionic/react";
import { gradient } from "@pt/constants/general";
import styled from "styled-components";


export const GradientButton = styled(IonButton)`
  --background:${gradient}
  --background-activated:${gradient} // For activated (clicked) state
  --background-focused:${gradient} // For focused state
  --background-hover:${gradient} // For hover state
  
  color: #2f2d2d;
`;
