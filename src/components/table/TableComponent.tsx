import React from "react";
import { CenteredWord, Player, Table } from "./TableComponent.style";
import { IPlayer } from "@pt/pages/PlayerInput/@type";

type TableComponentProps = {
  players: IPlayer[];
  rotation: number;
  onHandleTableClick: () => void;
  angleIncrement: number;
  randomWord: string;
};

const TableComponent: React.FC<TableComponentProps> = ({
  players,
  rotation,
  onHandleTableClick,
  angleIncrement,
  randomWord,
}) => {
  return (
    <Table onClick={onHandleTableClick}>
      <CenteredWord>{randomWord}</CenteredWord>
      {players.map((player, index) => (
        <Player
          key={player.name}
          $angle={(index * angleIncrement + rotation + 270) % 360}
          $color={player.color}
        >
          {player.name}
        </Player>
      ))}
    </Table>
  );
};

export default TableComponent;
