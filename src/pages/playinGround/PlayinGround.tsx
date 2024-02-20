import React, { useState } from "react";
import {
  CenteredWord,
  Player,
  PlayinGroundContainer,
  Table,
  TransparentModal,
} from "./PlayinGround.style";
import { usePlayersStore } from "@pt/stores/players.store";
import Timers from "@pt/components/timers/Timers";
import useRandomWord from "@pt/hooks/useRandomWord";
import HelpButton from "@pt/components/cooldownButton/CooldownButton";
import { IonButton, IonFooter } from "@ionic/react";
import PauseMenu from "@pt/components/pauseMenu/PauseMenu";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@pt/constants/routes";

const PlayinGround: React.FC = () => {
  const { playersIn } = usePlayersStore();
  const [rotation, setRotation] = useState(0);
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [randomWord, generateNewWord] = useRandomWord();
  const [gameIsPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const angleIncrement = 360 / playersIn.length;

  const rearrangePlayers = [
    ...playersIn.filter((_, index) => index % 2 === 0),
    ...playersIn.filter((_, index) => index % 2 !== 0),
  ];

  const handleTableClick = () => {
    // Rotate players counter-clockwise by one position
    setRotation((prevRotation) => (prevRotation - angleIncrement + 360) % 360);
    generateNewWord();
    // Move to the next player in a clockwise direction
    setActivePlayerIndex((prevIndex) => (prevIndex + 1) % playersIn.length);
  };
  const handlegameIsPaused = () => {
    setIsPaused(true);
  };
  return (
    <PlayinGroundContainer>
      <Timers
        activeTeam={rearrangePlayers[activePlayerIndex].color}
        gameIsPaused={gameIsPaused}
      />
      <Table onClick={handleTableClick}>
        <CenteredWord>{randomWord}</CenteredWord>
        {rearrangePlayers.map((player, index) => (
          <Player
            key={player.name}
            angle={(index * angleIncrement + rotation + 270) % 360} // Adjust angle for rotation and initial position
            color={player.color}
          >
            {player.name}
          </Player>
        ))}
      </Table>
      <IonFooter>
        <TransparentModal isOpen={gameIsPaused}>
          <PauseMenu
            onClose={() => setIsPaused(false)}
            onHome={() => navigate(RoutePaths.Home)}
          />
        </TransparentModal>

        <IonButton onClick={handlegameIsPaused}>Pause</IonButton>
        <HelpButton onHandleButtonClick={() => generateNewWord()}>
          next word
        </HelpButton>
      </IonFooter>
    </PlayinGroundContainer>
  );
};

export default PlayinGround;
