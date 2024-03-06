import React from "react";
import { PlayingGroundFooterContainer } from "../PlayingGround.style";
import PanTalkButton from "@pt/shared/panTalkButton/PanTalkButton";
import HelpButton from "@pt/components/helpButton/HelperButton";
import { GameStatus } from "@pt/constants/general";

interface FooterComponentProps {
  onPauseClick: () => void;
  onHandleRandomWord: () => void;
  gameStatus: GameStatus;
}

const FooterComponent: React.FC<FooterComponentProps> = ({
  onPauseClick,
  onHandleRandomWord,
  gameStatus,
}) => {
  return (
    <PlayingGroundFooterContainer>
      <PanTalkButton onClick={onPauseClick}>
        {gameStatus === GameStatus.gaming ? "Stop" : "Config"}
      </PanTalkButton>
      <HelpButton onHandleClick={onHandleRandomWord} gameStatus={gameStatus}>
        Next Word
      </HelpButton>
    </PlayingGroundFooterContainer>
  );
};

export default FooterComponent;
