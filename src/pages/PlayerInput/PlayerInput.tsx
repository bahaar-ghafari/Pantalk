import React, { useMemo, useState } from "react";
import {
  PlayerInput,
  PlayerInputContainer,
  TeamContainer,
} from "./PlayerInput.style";
import { Player } from "./@type";
import { teamColors, totalTimersDuration } from "@pt/constants/general";
import { usePlayersStore } from "@pt/stores/players.store";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@pt/constants/routes";
import PlayerCountSelector from "@pt/components/countButton/CountButton";
import PanTalkButton from "@pt/shared/panTalkButton/PanTalkButton";
import { Team } from "@pt/components/timers/@type";

const PlayerInputPage: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [playerCount, setPlayerCount] = useState(0);

  const { addPlayers, addTeams } = usePlayersStore();

  const navigate = useNavigate();
  const handlePlayerCountChange = (playerCount: number) => {
    setPlayerCount(playerCount);
    const numberOfTeams = playerCount / 2;
    const selectedTeamColors = teamColors.slice(0, numberOfTeams);
    const newPlayers = Array.from({ length: playerCount }, (_, index) => ({
      name: "",
      color: selectedTeamColors[Math.floor(index / 2)],
    }));
    setPlayers(newPlayers);
  };

  const handleNameChange = (name: string, index: number) => {
    const newPlayers = players.map((player, i) =>
      i === index ? { ...player, name } : player
    );
    setPlayers(newPlayers);
  };

  const createTeams = (players: Player[]): Team[] => {
    const teams = players.reduce<Team[]>((teams, player, index) => {
      if (index % 2 === 0) {
        const teamPlayers = [player, players[index + 1]].map((p) => p.name);
        const teamColor = player.color;
        const teamName = `${player.name} & ${players[index + 1].name}`;
        const timeRemaining = totalTimersDuration;

        teams.push({
          players: teamPlayers,
          name: teamName,
          color: teamColor,
          timeRemaining,
        });
      }
      return teams;
    }, []);
    return teams;
  };
  const teams = useMemo(() => createTeams(players), [players]);

  const handleSubmit = () => {
    if (players.find((player) => player.name === "")) {
      alert("Please fill all the names");
    } else {
      addPlayers(players);
      addTeams(teams);
      navigate(RoutePaths.PlayingGround);
    }
  };
  return (
    <PlayerInputContainer>
      <PlayerCountSelector
        onChange={handlePlayerCountChange}
        playerCount={playerCount}
      />

      <div>
        {playerCount > 0 &&
          teams.map((team, teamIndex) => (
            <TeamContainer key={teamIndex}>
              {team.players.map((player, index) => (
                <PlayerInput
                  key={teamIndex + "" + index}
                  $color={team.color}
                  value={player}
                  placeholder="Name"
                  onChange={(e) =>
                    handleNameChange(e.target.value!, teamIndex * 2 + index)
                  }
                  required={true}
                />
              ))}
            </TeamContainer>
          ))}
      </div>
      {players.length > 0 && (
        <PanTalkButton onClick={handleSubmit}>Save Players</PanTalkButton>
      )}
    </PlayerInputContainer>
  );
};

export default PlayerInputPage;
