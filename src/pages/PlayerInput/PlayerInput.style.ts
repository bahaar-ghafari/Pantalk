import { IonInput } from "@ionic/react";
import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PlayerContainer = styled.div<{ color: string }>`
  flex: 1;
  border: 3px solid ${props => props.color};
  margin: 0 10px;
  border-radius: 10px; // Rounded corners for better UI
`;

export const TeamMemberInput = styled(IonInput)`
  --padding-start: 0;
  --padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;
`;