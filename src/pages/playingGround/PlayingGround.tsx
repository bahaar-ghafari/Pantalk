import React, { useState } from "react";
import { PlayingGroundContainer } from "./PlayingGround.style";
import { usePlayersStore } from "@pt/stores/players.store";
import Timers from "@pt/components/timers/Timers";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@pt/constants/routes";
import TableComponent from "@pt/components/table/TableComponent";
import FooterComponent from "./components/FooterComponent";
import PauseMenu from "./components/PauseMenu";
import { TransparentModal } from "@pt/shared/transparentModal/TransparentModal.style";
import useRandomWord from "@pt/hooks/useRandomWord";
import { GameStatus, totalTimersDuration } from "@pt/constants/general";
import GameResult from "@pt/components/gameResult/GameResult";

const PlayingGround: React.FC = () => {
  const { playersIn, teams, addTeams } = usePlayersStore();
  const [rotation, setRotation] = useState(0);
  const [activePlayerIndex, setActivePlayerIndex] = useState(
    playersIn.length / 2
  );
  const [gameStatus, setGameStatus] = useState(GameStatus.start);
  const [randomWord, generateRandomWord] = useRandomWord();
  const navigate = useNavigate();
  const angleIncrement = 360 / playersIn.length;

  const handleTableClick = () => {
    if (gameStatus !== GameStatus.start) {
      setRotation(
        (prevRotation) => (prevRotation - angleIncrement + 360) % 360
      );
      setActivePlayerIndex((prevIndex) => (prevIndex + 1) % playersIn.length);
    }
    setGameStatus(GameStatus.gaming);
    generateRandomWord();
  };
  const handleRematch = () => {
    setGameStatus(GameStatus.start);
    addTeams(
      teams.map((item) => {
        return { ...item, timeRemaining: totalTimersDuration };
      })
    );
  };
  const handlePauseClick = () => {
    switch (gameStatus) {
      case GameStatus.startPause:
        setGameStatus(GameStatus.start);
        break;
      case GameStatus.start:
        setGameStatus(GameStatus.startPause);
        break;
      case GameStatus.pause:
        setGameStatus(GameStatus.gaming);
        break;
      default:
        setGameStatus(GameStatus.pause);
        break;
    }
  };
  const handleHome = () => navigate(RoutePaths.Home);
  const rearrangePlayers = [
    ...playersIn.filter((_, index) => index % 2 === 0),
    ...playersIn.filter((_, index) => index % 2 !== 0),
  ];
  const handleTimeout = () => {
    setGameStatus(GameStatus.end);
  };
  return (
    <PlayingGroundContainer>
      <Timers
        activeTeam={rearrangePlayers[activePlayerIndex].color}
        gameStatus={gameStatus}
        onHandleTimeout={handleTimeout}
      />
      <TableComponent
        activePlayer={rearrangePlayers[activePlayerIndex].name}
        gameStatus={gameStatus}
        randomWord={randomWord}
        players={rearrangePlayers}
        rotation={rotation}
        onHandleTableClick={handleTableClick}
        angleIncrement={angleIncrement}
      />
      <FooterComponent
        onPauseClick={handlePauseClick}
        onHandleRandomWord={generateRandomWord}
        gameStatus={gameStatus}
      />
      {[GameStatus.pause, GameStatus.startPause].includes(gameStatus) && (
        <TransparentModal>
          <PauseMenu onClose={handlePauseClick} onHome={handleHome} />
        </TransparentModal>
      )}
      {[GameStatus.end].includes(gameStatus) && (
        <TransparentModal>
          <GameResult reMatch={handleRematch} onHome={handleHome} />
        </TransparentModal>
      )}
    </PlayingGroundContainer>
  );
};

export default PlayingGround;
