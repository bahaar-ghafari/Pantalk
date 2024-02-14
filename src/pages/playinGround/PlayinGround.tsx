import React, { useState } from "react";
import { GameContainer, Player, Table } from "./PlayinGround.style";

type Player = {
  name: string;
  color: string;
};
const playersIn: Player[] = [
  { name: "Alice", color: "#FF5733" }, // Red
  { name: "Bob", color: "#33FF57" }, // Green
  { name: "Charlie", color: "#3357FF" }, // Blue
  { name: "Diana", color: "#F033FF" }, // Purple
  { name: "Hannah", color: "#FF5733" }, // Red
  { name: "George", color: "#33FF57" }, // Green
  { name: "Fiona", color: "#3357FF" }, // Blue
  { name: "Ethan", color: "#F033FF" }, // Purple
];
// The React component
const CircleGame: React.FC = () => {
  const [players] = useState<Player[]>(playersIn);

  // Function to add players (this would be triggered by user input in a real game)
  // const addPlayer = (name: string, color: string) => {
  //   setPlayers([...players, { name, color }]);
  // };

  // Calculate the angle between circles based on the number of players
  const angleIncrement = 360 / players.length;

  return (
    <GameContainer>
      <Table>
        {players.map((player, index) => (
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

export default CircleGame;
