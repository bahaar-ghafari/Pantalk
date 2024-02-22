import React from "react";
import { StyledList } from "./PauseMenu.style";
import PanTaclkButton from "@pt/shared/panTaclkButton/PanTaclkButton";

const PauseMenu: React.FC<{ onClose: () => void; onHome: () => void }> = ({
  onClose,
  onHome,
}) => {
  return (
    <StyledList>
      <PanTaclkButton onClick={onClose}>
        Continue
      </PanTaclkButton>
      <PanTaclkButton onClick={onHome}>
        Home
      </PanTaclkButton>
    </StyledList>
  );
};
export default PauseMenu;
