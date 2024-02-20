import React, { useEffect, useState } from "react";
import { TeamTimer } from "./Timer.style";
import { totalTimersDuration } from "@pt/constants/general";

const Timer: React.FC<{
  isactive: string;
  team: {
    name: string;
    timeRemaining: number;
  };
  gameIsPaused: boolean;
  onTimeout: () => void;
}> = ({ isactive, onTimeout, team, gameIsPaused }) => {
  const [timeRemaining, setTimeRemaining] = useState(totalTimersDuration);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (isactive === 'true' && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    // Stop the timer when the game is paused
    if (gameIsPaused && interval) {
      clearInterval(interval);
    }

    if (timeRemaining === 0) {
      clearInterval(interval!);
      onTimeout();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isactive, timeRemaining, onTimeout]);

  // Calculate the width based on remaining time
  const widthPercentage = `${(timeRemaining / totalTimersDuration) * 100}%`;

  return (
    <TeamTimer width={widthPercentage} isactive={isactive} color={team.name}>
      {timeRemaining}
    </TeamTimer>
  );
};

export default Timer;
