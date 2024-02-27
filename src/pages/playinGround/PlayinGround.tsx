import React, { useState } from "react";
import { PlayinGroundContainer } from "./PlayinGround.style";
import { usePlayersStore } from "@pt/stores/players.store";
import Timers from "@pt/components/timers/Timers";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@pt/constants/routes";
import TableComponent from "@pt/components/table/TableComponent";
import FooterComponent from "./components/FooterComponent";
import PauseMenu from "./components/PauseMenu";
import { TransparentModal } from "@pt/shared/transparentModal/TransparentModal.style";
import useRandomWord from "@pt/hooks/useRandomWord";

const PlayinGround: React.FC = () => {
  const { playersIn } = usePlayersStore();
  const [rotation, setRotation] = useState(0);
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const [gameIsPaused, setGameIsPaused] = useState(false);
  const navigate = useNavigate();
  const [randomWord, generateRandomWord] = useRandomWord();
  const angleIncrement = 360 / playersIn.length;

  const handleTableClick = () => {
    setRotation((prevRotation) => (prevRotation - angleIncrement + 360) % 360);
    generateRandomWord();
    setActivePlayerIndex((prevIndex) => (prevIndex + 1) % playersIn.length);
  };

  const handlePauseClick = () => {
    setGameIsPaused(!gameIsPaused);
  };
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
        randomWord={randomWord}
        players={rearrangePlayers}
        rotation={rotation}
        onHandleTableClick={handleTableClick}
        angleIncrement={angleIncrement}
      />
      <FooterComponent
        onPauseClick={handlePauseClick}
        onHnadleRandomWord={generateRandomWord}
      />
      {gameIsPaused && (
        <TransparentModal>
          <PauseMenu onClose={handlePauseClick} onHome={handleHome} />
        </TransparentModal>
      )}
    </PlayinGroundContainer>
  );
};

export default PlayinGround;
