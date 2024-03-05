import React from "react";
import PanTalkButton from "@pt/shared/panTalkButton/PanTalkButton";
import { usePlayersStore } from "@pt/stores/players.store";
import { GameResultContainer, ResultFooter } from "./GameResult.style";

type GameResultProps = {
  onHome: () => void;
  reMatch: () => void;
};

const GameResult: React.FC<GameResultProps> = ({ reMatch, onHome }) => {
  const { teams } = usePlayersStore();
  const Winners = teams.reduce((maxItem, currentItem) => {
    if (currentItem.timeRemaining > maxItem.timeRemaining) {
      return currentItem;
    } else {
      return maxItem;
    }
  }, teams[0]);
  return (
    <GameResultContainer>
      <h1> Winner: {Winners.name}</h1>
      <div>
        {teams
          .filter((item) => item.name !== Winners.name)
          .map((team, index) => (
            <p key={index}>
              {team.name}: {team.timeRemaining} s remaining
            </p>
          ))}
      </div>
      <ResultFooter>
        <PanTalkButton onClick={reMatch}>Rematch</PanTalkButton>
        <PanTalkButton onClick={onHome}>Go Home</PanTalkButton>
      </ResultFooter>
    </GameResultContainer>
  );
};

export default GameResult;
