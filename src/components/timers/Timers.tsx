import { usePlayersStore } from "@pt/stores/players.store";
import Timer from "./components/Timer";
import { totalTimersDuration } from "@pt/constants/general";

type TimersProps = {
  activeTeam: string;
  gameIsPaused: boolean;
};
const Timers: React.FC<TimersProps> = ({ activeTeam, gameIsPaused }) => {
  const { playersIn } = usePlayersStore();
  const teams = playersIn
    .filter((_, index) => index % 2 === 0)
    .map((item) => ({ name: item.color, timeRemaining: totalTimersDuration }));

  const handleTimeout = () => {
    // Handle when a team's timer runs out
  };

  return (
    <div>
      {teams.map((team) => (
        <Timer
          key={team.name}
          team={team}
          isactive={team.name === activeTeam ? "true" : "false"}
          onTimeout={handleTimeout}
          gameIsPaused={gameIsPaused}
        />
      ))}
    </div>
  );
};

export default Timers;
