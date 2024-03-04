// store.ts
import { Player } from "@pt/pages/PlayerInput/@type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type PlayersState = {
  playersIn: Player[];
  addPlayers: (players: Player[]) => void;
};

export const usePlayersStore = create<PlayersState>()(
  persist(
    (set) => ({
      playersIn: [],
      addPlayers: (players) => set(() => ({ playersIn: players })),
    }),
    {
      name: "players-storage", // unique name
    }
  )
);
