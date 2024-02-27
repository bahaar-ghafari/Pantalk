import PanTalkButton from "@pt/shared/panTalkButton/PanTalkButton";
import styled from "styled-components";

export const HelperButton = styled(PanTalkButton)`
  transition: opacity 2s linear;
  min-width: 235px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
