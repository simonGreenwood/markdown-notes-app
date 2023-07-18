import { create } from "zustand";
import { RawState } from "../types";
export const useRawStore = create<RawState>((set) => ({
  raw: false,
  toggleRaw: () => set((state: RawState) => ({ raw: !state.raw })),
}));
