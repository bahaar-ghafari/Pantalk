import PanTalkButton from "@pt/shared/panTalkButton/PanTalkButton";
import React from "react";

type GameResultProps = {
  onHome: () => void;
  reMatch: () => void;
};

const GameResult: React.FC<GameResultProps> = ({
  reMatch,
  onHome,
}) => {
  
  return (
    <div>
      {/* <h2> Winner: {winner}</h2> */}
      <div>
        {/* {teams.map((team, index) => (
          <p key={index}>
            {team.name}: {team.remainingTime} seconds remaining
          </p>
        ))} */}
      </div>
      <PanTalkButton onClick={reMatch}>Rematch</PanTalkButton>
      <PanTalkButton onClick={onHome}>Go Home</PanTalkButton>
    </div>
  );
};

export default GameResult;
