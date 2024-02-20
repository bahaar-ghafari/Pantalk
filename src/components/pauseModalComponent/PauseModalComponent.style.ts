import { IonModal } from "@ionic/react";
import styled from "styled-components";

export const TransparentModal = styled(IonModal)`
--background: rgba(0, 0, 0, 0.4); // Adjust transparency as needed

.modal-wrapper {
  background: transparent;
}
& > .ion-page {
  position: relative;
  contain: layout style;
  height: 100%;
  display: flex;
  justify-content: center;
}
`;
