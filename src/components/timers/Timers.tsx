import { usePlayersStore } from "@pt/stores/players.store";
import Timer from "./components/Timer";
import { GameStatus } from "@pt/constants/general";

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
  const { teams } = usePlayersStore();
  return (
    <div>
      {teams.map((team) => (
        <Timer
          key={team.name}
          team={team}
          isActive={
            team.color === activeTeam &&
            [GameStatus.gaming].includes(gameStatus)
          }
          onTimeout={onHandleTimeout}
          gameStatus={gameStatus}
        />
      ))}
    </div>
  );
};

export default Timers;
