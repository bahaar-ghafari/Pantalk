// store.ts
import { Team } from "@pt/components/timers/@type";
import { Player } from "@pt/pages/PlayerInput/@type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type PlayersState = {
  playersIn: Player[];
  teams: Team[];
  addPlayers: (players: Player[]) => void;
  addTeams: (team: Team[]) => void;
  updateTeams:  (updateTeams: (prevTeams: Team[]) => Team[]) => void;
};

export const usePlayersStore = create<PlayersState>()(
  persist(
    (set) => ({
      playersIn: [],
      teams: [],
      addPlayers: (players) => set(() => ({ playersIn: players })),
      addTeams:(teams) => set(() => ({ teams })),
      updateTeams: (updateTeams) => set((state) => ({ teams: updateTeams(state.teams) })),
    }),
    {
      name: "players-storage", // unique name
    }
  )
);
