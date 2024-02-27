import { usePlayersStore } from "@pt/stores/players.store";
import Timer from "./components/Timer";
import { GameStatus, totalTimersDuration } from "@pt/constants/general";

type TimersProps = {
  activeTeam: string;
  gameStatus: GameStatus;
  onHandleTimeout: () => void;
};
const Timers: React.FC<TimersProps> = ({
  activeTeam,
  gameStatus,
  onHandleTimeout,
}) => {
  const { playersIn } = usePlayersStore();
  const teams = playersIn
    .filter((_, index) => index % 2 === 0)
    .map((item) => ({ name: item.color, timeRemaining: totalTimersDuration }));

  return (
    <div>
      {teams.map((team) => (
        <Timer
          key={team.name}
          team={team}
          isActive={team.name === activeTeam}
          onTimeout={onHandleTimeout}
          gameStatus={gameStatus}
        />
      ))}
    </div>
  );
};

export default Timers;
