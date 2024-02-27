import React from "react";
import { PlayingGroundFooterContainer } from "../PlayingGround.style";
import PanTalkButton from "@pt/shared/panTalkButton/PanTalkButton";
import HelpButton from "@pt/components/helpButton/HelperButton";

interface FooterComponentProps {
  onPauseClick: () => void;
  onHandleRandomWord: () => void;
}

const FooterComponent: React.FC<FooterComponentProps> = ({
  onPauseClick,
  onHandleRandomWord,
}) => {
  return (
    <PlayingGroundFooterContainer>
      <PanTalkButton onClick={onPauseClick}>Pause</PanTalkButton>
      <HelpButton onHandleClick={onHandleRandomWord}>Next Word</HelpButton>
    </PlayingGroundFooterContainer>
  );
};

export default FooterComponent;
