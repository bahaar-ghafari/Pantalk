import React, { useEffect, useState } from "react";
import { TeamTimer } from "./Timer.style";
import { GameStatus, totalTimersDuration } from "@pt/constants/general";
import { Team } from "../@type";
import { usePlayersStore } from "@pt/stores/players.store";

const Timer: React.FC<{
  activeTeam: string;
  isActive: boolean;
  team: Team;
  gameStatus: GameStatus;
  onTimeout: (team: Team) => void;
}> = ({ isActive, onTimeout, team, gameStatus, activeTeam }) => {
  const [remainTime, setRemainTime] = useState(totalTimersDuration);
  const { teams, addTeams } = usePlayersStore();

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (isActive && remainTime > 0) {
      interval = setInterval(() => {
        setRemainTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    // Stop the timer when the game is paused
    if ([GameStatus.pause].includes(gameStatus) && interval) {
      clearInterval(interval);
    }

    if (remainTime === 0) {
      onTimeout(team);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, remainTime, team.color, gameStatus]);
  useEffect(() => {
    const newTeams = teams.map((item) =>
      item.color === team.color ? { ...item, timeRemaining: remainTime } : item
    );
    addTeams(newTeams);
  }, [activeTeam, gameStatus]);
  // Calculate the width based on remaining time
  const widthPercentage = `${(remainTime / totalTimersDuration) * 100}%`;

  return (
    <TeamTimer width={widthPercentage} $isActive={isActive} color={team.color}>
      {remainTime}
    </TeamTimer>
  );
};

export default Timer;
