import React, { useState } from "react";
import { PlayinGroundContainer } from "./PlayinGround.style";
import { usePlayersStore } from "@pt/stores/players.store";
import Timers from "@pt/components/timers/Timers";
import useRandomWord from "@pt/hooks/useRandomWord";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@pt/constants/routes";
import PauseModalComponent from "@pt/components/pauseModalComponent/PauseModalComponent";
import TableComponent from "@pt/components/table/TableComponent";
import FooterComponent from "./components/FooterComponent";

const PlayinGround: React.FC = () => {
  const { playersIn } = usePlayersStore();
  const [rotation, setRotation] = useState(0);
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [, generateNewWord] = useRandomWord();
  const [gameIsPaused, setGameIsPaused] = useState(false);
  const navigate = useNavigate();

  const angleIncrement = 360 / playersIn.length;

  const handleTableClick = () => {
    setRotation((prevRotation) => (prevRotation - angleIncrement + 360) % 360);
    generateNewWord();
    setActivePlayerIndex((prevIndex) => (prevIndex + 1) % playersIn.length);
  };

  const handlePauseClick = () => setGameIsPaused(!gameIsPaused);
  const handleHome = () => navigate(RoutePaths.Home);
  const rearrangePlayers = [
    ...playersIn.filter((_, index) => index % 2 === 0),
    ...playersIn.filter((_, index) => index % 2 !== 0),
  ];
  return (
    <PlayinGroundContainer>
      <Timers
        activeTeam={rearrangePlayers[activePlayerIndex].color}
        gameIsPaused={gameIsPaused}
      />
      <TableComponent
        players={rearrangePlayers}
        rotation={rotation}
        handleTableClick={handleTableClick}
        angleIncrement={angleIncrement}
      />
      <FooterComponent
        onHelpClick={generateNewWord}
        onPauseClick={handlePauseClick}
      />
      <PauseModalComponent
        isOpen={gameIsPaused}
        onClose={handlePauseClick}
        onHome={handleHome}
      />
    </PlayinGroundContainer>
  );
};

export default PlayinGround;
