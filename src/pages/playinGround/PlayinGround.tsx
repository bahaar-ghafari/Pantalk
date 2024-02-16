import React from "react";
import { GameContainer, Player, Table } from "./PlayinGround.style";
import { usePlayersStore } from "@pt/stores/players.store";

const PlayinGround: React.FC = () => {
  const { playersIn } = usePlayersStore();
  const rearrangePlayers = () => {
    const firstHalf = playersIn.filter((_, index) => index % 2 === 0);
    const secondHalf = playersIn.filter((_, index) => index % 2 !== 0);
    return [...firstHalf, ...secondHalf]
  };
  // Calculate the angle between circles based on the number of players
  const angleIncrement = 360 / playersIn.length;

  return (
    <GameContainer>
      <Table>
        {rearrangePlayers().map((player, index) => (
          <Player
            key={player.name}
            angle={index * angleIncrement}
            color={player.color}
          >
            {player.name}
          </Player>
        ))}
      </Table>
    </GameContainer>
  );
};

export default PlayinGround;
