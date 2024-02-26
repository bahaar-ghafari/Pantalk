import React from "react";
import HelpButton from "@pt/components/cooldownButton/CooldownButton";
import { PlayinGroundFooterContainer } from "../PlayinGround.style";
import PanTalkButton from "@pt/shared/panTaclkButton/PanTaclkButton";

interface FooterComponentProps {
  onPauseClick: () => void;
  onHnadleRandomWord: () => void;
}

const FooterComponent: React.FC<FooterComponentProps> = ({
  onPauseClick,
  onHnadleRandomWord,
}) => {
  return (
    <PlayinGroundFooterContainer>
      <PanTalkButton onClick={onPauseClick}>Pause</PanTalkButton>
      <HelpButton onHandleClick={onHnadleRandomWord}>Next Word</HelpButton>
    </PlayinGroundFooterContainer>
  );
};

export default FooterComponent;
