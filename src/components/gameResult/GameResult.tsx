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
  const maxTimeRemaining = teams.reduce(
    (maxTime, team) => Math.max(maxTime, team.timeRemaining),
    0
  );

  const winners = teams.filter(
    (team) => team.timeRemaining === maxTimeRemaining
  );

  return (
    <GameResultContainer>
      <div>
        <h1>Winners: </h1>
        <ul>
          {winners.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>

      <div>
        {teams.map((team, index) => (
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
