import React from "react";
import { CenteredWord, Player, Table } from "./TableComponent.style";
import useRandomWord from "@pt/hooks/useRandomWord";
import { IPlayer } from "@pt/pages/PlayerInput/@type";

interface TableComponentProps {
  players: IPlayer[];
  rotation: number;
  handleTableClick: () => void;
  angleIncrement: number;
}

const TableComponent: React.FC<TableComponentProps> = ({
  players,
  rotation,
  handleTableClick,
  angleIncrement,
}) => {

  const [randomWord,] = useRandomWord();

  return (
    <Table onClick={handleTableClick}>
      <CenteredWord>{randomWord}</CenteredWord>
      {players.map((player, index) => (
        <Player
          key={player.name}
          angle={(index * angleIncrement + rotation + 270) % 360}
          color={player.color}
        >
          {player.name}
        </Player>
      ))}
    </Table>
  );
};

export default TableComponent;
