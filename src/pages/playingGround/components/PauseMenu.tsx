import React from "react";
import { StyledList } from "./PauseMenu.style";
import PanTalkButton from "@pt/shared/panTalkButton/PanTalkButton";

const PauseMenu: React.FC<{ onClose: () => void; onHome: () => void }> = ({
  onClose,
  onHome,
}) => {
  return (
    <StyledList>
      <h1>Game Paused</h1>
      <PanTalkButton onClick={onClose}>
        Continue
      </PanTalkButton>
      <PanTalkButton onClick={onHome}>
        Home
      </PanTalkButton>
    </StyledList>
  );
};
export default PauseMenu;
