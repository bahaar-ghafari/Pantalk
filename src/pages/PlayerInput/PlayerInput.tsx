import React, { useState } from "react";
import {
  PlayerInput,
  PlayerInputContainer,
  TeamContainer,
} from "./PlayerInput.style";
import { Player } from "./@type";
import { teamColors } from "@pt/constants/general";
import { usePlayersStore } from "@pt/stores/players.store";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@pt/constants/routes";
import PlayerCountSelector from "@pt/components/countButton/CountButton";
import PanTalkButton from "@pt/shared/panTalkButton/PanTalkButton";

const PlayerInputPage: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [playerCount, setPlayerCount] = useState(0);

  const { addPlayers } = usePlayersStore();

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

  const handleSubmit = () => {
    if (players.find((player) => player.name === "")) {
      alert("Please fill all the names");
    } else {
      addPlayers(players);
      navigate(RoutePaths.PlayingGround);
    }
  };
  const createTeams = (players: Player[]) => {
    return players.reduce<Player[][]>((allPairs, player, index) => {
      if (index % 2 === 0) {
        allPairs.push([player, players[index + 1]]);
      }
      return allPairs;
    }, []);
  };
  return (
    <PlayerInputContainer>
      <PlayerCountSelector
        onChange={handlePlayerCountChange}
        playerCount={playerCount}
      />

      <div>
        {playerCount > 0 &&
          createTeams(players).map((pair, pairIndex) => (
            <TeamContainer key={pairIndex}>
              {pair.map((player, index) => (
                <PlayerInput
                  key={pairIndex + "" + index}
                  $color={player.color}
                  value={player.name}
                  placeholder="Name"
                  onChange={(e) =>
                    handleNameChange(e.target.value!, pairIndex * 2 + index)
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
