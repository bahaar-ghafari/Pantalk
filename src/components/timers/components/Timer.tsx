import React, { useEffect, useState } from "react";
import { TeamTimer } from "./Timer.style";
import { GameStatus, totalTimersDuration } from "@pt/constants/general";

const Timer: React.FC<{
  isActive: boolean;
  team: {
    name: string;
    timeRemaining: number;
  };
  gameStatus: GameStatus;
  onTimeout: () => void;
}> = ({ isActive, onTimeout, team, gameStatus }) => {
  const [timeRemaining, setTimeRemaining] = useState(totalTimersDuration);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if ([GameStatus.gaming].includes(gameStatus) && isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    // Stop the timer when the game is paused
    if ([GameStatus.pause].includes(gameStatus) && interval) {
      clearInterval(interval);
    }

    if (timeRemaining === 0) {
      clearInterval(interval!);
      onTimeout();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeRemaining, onTimeout,gameStatus]);

  // Calculate the width based on remaining time
  const widthPercentage = `${(timeRemaining / totalTimersDuration) * 100}%`;

  return (
    <TeamTimer width={widthPercentage} $isActive={isActive && [GameStatus.gaming].includes(gameStatus)} color={team.name}>
      {timeRemaining}
    </TeamTimer>
  );
};

export default Timer;
