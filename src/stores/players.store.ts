// store.ts
import { Team } from "@pt/components/timers/@type";
import { Player } from "@pt/pages/PlayerInput/@type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type PlayersState = {
  playersIn: Player[];
  teams: Team[];
  addPlayers: (players: Player[]) => void;
  addTeams: (teams: Team[]) => void;
};

export const usePlayersStore = create<PlayersState>()(
  persist(
    (set) => ({
      playersIn: [],
      teams: [],
      addPlayers: (players) => set(() => ({ playersIn: players })),
      addTeams: (teams) => set(() => ({ teams })),
    }),
    {
      name: "players-storage", // unique name
    }
  )
);
