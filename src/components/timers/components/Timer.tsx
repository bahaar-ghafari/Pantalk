import React, { useEffect, useState } from "react";
import { TeamTimer } from "./Timer.style";
import { GameStatus, totalTimersDuration } from "@pt/constants/general";
import { Team } from "../@type";
import { usePlayersStore } from "@pt/stores/players.store";

const Timer: React.FC<{
  isActive: boolean;
  team: Team;
  gameStatus: GameStatus;
  onTimeout: () => void;
}> = ({ isActive, onTimeout, team, gameStatus }) => {
  const [remainTime, setRemainTime] = useState(totalTimersDuration);
  const { updateTeams } = usePlayersStore();

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (isActive && remainTime > 0) {
      interval = setInterval(() => {
        setRemainTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    // Stop the timer when the game is paused
    if (
      [GameStatus.pause, GameStatus.startPause].includes(gameStatus) &&
      interval
    ) {
      clearInterval(interval);
    }

    if (remainTime === 0 && [GameStatus.gaming].includes(gameStatus)) {
      onTimeout();
    }
    if (gameStatus === GameStatus.end) {
      updateTeams((prevTeams: Team[]) =>
        prevTeams.map((item) =>
          item.color === team.color
            ? { ...item, timeRemaining: remainTime }
            : item
        )
      );
    }
    if (gameStatus === GameStatus.start) setRemainTime(totalTimersDuration);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, remainTime, team.color, gameStatus]);

  // Calculate the width based on remaining time
  const widthPercentage = `${(remainTime / totalTimersDuration) * 100}%`;

  return (
    <TeamTimer width={widthPercentage} $isActive={isActive} color={team.color}>
      {remainTime}
    </TeamTimer>
  );
};

export default Timer;
