import React, { useState } from "react";
import {
  IonApp,
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import {
  PlayerContainer,
  TeamContainer,
  TeamMemberInput,
} from "./PlayerInput.style";
import { Player } from "./@type";
import { playerOptions, teamColors } from "@pt/constants/general";
import { usePlayersStore } from "@pt/stores/players.store";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@pt/constants/routes";

const PlayerInputPage: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const { addPlayers } = usePlayersStore();
  
  const navigate = useNavigate();

  const handleAddPlayers = (playerCount: number) => {
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
    addPlayers(players)
    navigate(RoutePaths.PlayinGround);

  };
  const createPair = (players: Player[]) => {
    return players.reduce<Player[][]>((allPairs, player, index) => {
      if (index % 2 === 0) {
        allPairs.push([player, players[index + 1]]);
      }
      return allPairs;
    }, []);
  };
  return (
    <IonApp>
      <IonContent>
        <IonItem>
          <IonLabel>Count of Players</IonLabel>
          <IonSelect
            value={players.length}
            placeholder="Select players count"
            onIonChange={(e) => handleAddPlayers(e.detail.value)}
          >
            {playerOptions.map((number) => (
              <IonSelectOption key={number} value={number}>
                {number}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>

        {players.length > 0 &&
          createPair(players).map((pair, pairIndex) => (
            <TeamContainer key={pairIndex}>
              {pair.map((player, index) => (
                <PlayerContainer key={index} color={player.color}>
                  <TeamMemberInput
                    value={player.name}
                    placeholder="Name"
                    onIonChange={(e) =>
                      handleNameChange(e.detail.value!, pairIndex * 2 + index)
                    }
                    required
                  />
                </PlayerContainer>
              ))}
            </TeamContainer>
          ))}

        {players.length > 0 && (
          <IonButton expand="block" onClick={handleSubmit}>
            Save Players
          </IonButton>
        )}
      </IonContent>
    </IonApp>
  );
};

export default PlayerInputPage;
