import React from "react";
import { CenteredWord, PlayerComponent, Table } from "./TableComponent.style";
import { Player } from "@pt/pages/PlayerInput/@type";
import { GameStatus } from "@pt/constants/general";

type TableComponentProps = {
  players: Player[];
  rotation: number;
  onHandleTableClick: () => void;
  angleIncrement: number;
  randomWord: string;
  gameStatus: GameStatus;
  activePlayer: string;
};

const TableComponent: React.FC<TableComponentProps> = ({
  players,
  rotation,
  onHandleTableClick,
  angleIncrement,
  randomWord,
  gameStatus,
  activePlayer
}) => {
  return (
    <Table onClick={onHandleTableClick}>
      <CenteredWord>
        {gameStatus.includes(GameStatus.start) ? GameStatus.start : randomWord}
      </CenteredWord>
      {players.map((player, index) => (
        <PlayerComponent
          $isActive={activePlayer === player.name && gameStatus === GameStatus.gaming}
          key={player.name}
          $angle={(index * angleIncrement + rotation + 270) % 360}
          $color={player.color}
        >
          {player.name}
        </PlayerComponent>
      ))}
    </Table>
  );
};

export default TableComponent;
