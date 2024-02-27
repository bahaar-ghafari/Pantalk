// store.ts
import { IPlayer } from "@pt/pages/PlayerInput/@type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type PlayersState = {
  playersIn: IPlayer[];
  addPlayers: (players: IPlayer[]) => void;
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
