import React from "react";
import { CountButtonContainer, CountDisplay } from "./CountButton.style";
import PanTalkButton from "@pt/shared/panTalkButton/PanTalkButton";

type PlayerCountSelectorProps = {
  playerCount: number;
  onChange: (value: number) => void;
};
const PlayerCountSelector: React.FC<PlayerCountSelectorProps> = ({
  playerCount,
  onChange,
}) => {
  const allowedCounts = [2, 4, 6, 8, 10];

  const incrementCount = () => {
    const currentIndex = allowedCounts.indexOf(playerCount);
    if (currentIndex < allowedCounts.length - 1) {
      onChange(allowedCounts[currentIndex + 1]);
    }
  };

  const decrementCount = () => {
    const currentIndex = allowedCounts.indexOf(playerCount);
    if (currentIndex > 0) {
      onChange(allowedCounts[currentIndex - 1]);
    }
  };

  return (
    <div>
      <p>How many players are in the game?</p>
      <CountButtonContainer>
        <PanTalkButton onClick={decrementCount}>-</PanTalkButton>
        <CountDisplay>{playerCount}</CountDisplay>
        <PanTalkButton onClick={incrementCount}>+</PanTalkButton>
      </CountButtonContainer>
    </div>
  );
};

export default PlayerCountSelector;
